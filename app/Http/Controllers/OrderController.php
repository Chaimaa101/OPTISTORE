<?php

namespace App\Http\Controllers;

use App\Models\cartItem;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\payment;
use App\Models\userAddress;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $orders = Order::with(['user', 'address'])->get();
        return Inertia::render('AdminPage/Orders' ,['orders' =>$orders]);
    }


       public function store(Request $request)
    {
        $validated = $request->validate([
            'address1' => 'required|string|max:255',
            'address2' => 'nullable|string|max:255',
            'city' => 'required|string|max:255',
            'country' => 'required|string|max:255',
            'state' => 'required|string|max:255',
            'zipcode' => 'required|string|max:20',
            'phone' => 'required|string|max:20',
            'total_price' => 'required|numeric|min:0',
            'status' => 'required|string',
              'payment_method' => 'required|string|in:cash_on_delivery,credit_card,paypal',
            'items' => 'required|array',
            'items.*.product_id' => 'required|exists:products,id',
            'items.*.quantity' => 'required|integer|min:1',
            'items.*.unit_price' => 'required|numeric|min:0',
        ]);

        return DB::transaction(function () use ($validated) {
            $user = Auth::user();

         
                $address = userAddress::create([
                    'address1' => $validated['address1'],
                    'address2' => $validated['address2'] ?? null,
                    'city' => $validated['city'],
                    'country' => $validated['country'],
                    'state' => $validated['state'],
                    'zipcode' => $validated['zipcode'],
                    'phone' => $validated['phone'],
                    'isMain' => false,
                    'user_id' => $user ? $user->id : null,
                ]);

            // Create order
            $order = Order::create([
                'user_id' => $user ? $user->id : null,
                'address_id' => $address->id,
                'total_price' => $validated['total_price'],
                'status' => 'pending',
            ]);

            // Create order items
            foreach ($validated['items'] as $item) {
                OrderItem::create([
                    'order_id' => $order->id,
                    'product_id' => $item['product_id'],
                    'quantity' => $item['quantity'],
                    'unit_price' => $item['unit_price'],
                     'created_by' => $user ? $user->id : null,
                'updated_by' => $user ? $user->id : null,
                ]);
            }
                $payment = payment::create([
                'order_id' => $order->id,
                'amount' => $validated['total_price'],
                'type' => $validated['payment_method'],
                'status' => $validated['status'],
                'created_by' => $user ? $user->id : null,
                'updated_by' => $user ? $user->id : null,
            ]);

            // Process payment based on method
            if ($validated['payment_method'] === 'credit_card') {
                // Integrate with your payment gateway here
                // $paymentResult = PaymentGateway::charge($validated['total_price']);
                  // Update payment status based on result
                $payment->update(['status' => 'completed']);
            }

            return redirect("/homeUser")->withErrors("error passing order")->withInput();
        });
    }
    public function destroy(Order $order){
         $order->delete();
        return back()->withErrors("error delete order")->withInput();
    }
}