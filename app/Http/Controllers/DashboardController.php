<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Product;
use App\Models\User;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('AdminPage/Dashbord', [  
            'stats' => [
                'totalProducts' => Product::count(),
                'totalOrders' => Order::count(),
                'totalUsers' => User::count(),
                'totalRevenue' => Order::sum('total_price'),
            ],
        ]);
    }
}