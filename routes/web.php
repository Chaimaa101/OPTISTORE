<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\{
    AuthController,
    CartItemController,
    DashboardController,
    ProductController,
    MessageController,
    OrderController
};
use App\Http\Middleware\EnsureIsAdmin;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application.
| These routes will be loaded by the RouteServiceProvider.
|
*/
 Route::post('/register', [AuthController::class, 'register']);
        Route::post('/login', [AuthController::class, 'login']);


        
    Route::get('/', function () {
        return Inertia::render('HomePage');

       
    })->name('home');
    Route::get('/blogs', function () {
        return Inertia::render('BlogsPage');
    })->name('blogs');
    Route::get('/about', function () {
        return Inertia::render('AboutPage');
    })->name('about');
    Route::get('/contact', function () {
        return Inertia::render('ContactUsPage');
    })->name('contact');

    Route::get('/return-policy', function () {
        return Inertia::render('ReturnPolicyPage');
    })->name('return.policy');

    Route::get('/shipping-policy', function () {
        return Inertia::render('ShippingPolicyPage');
    })->name('shipping.policy');

    Route::get('/products', function () {
        return Inertia::render('ListProducts');
    })->name('products.index');
    Route::get('/login', function () {
        return Inertia::render('SigninPage');
    })->name('login');

    Route::get('/register', function () {
        return Inertia::render('RegisterPage');
    })->name('register');
    Route::get('/{categoryId}/{itemId}', [ProductController::class, 'show'])
        ->name('show.product');

        Route::get('/products/category/{id}', [ProductController::class, 'index'])
        ->name('products.category');


Route::middleware('auth')->group(function () {

    Route::resource('carts', CartItemController::class);
    Route::delete('cart/{cartItem}', [CartItemController::class, 'destroy'])->name('cart-items.destroy');
    Route::get('/checkout', function () {
        return Inertia::render('CheckOutPage');
    })->name('checkout');

    Route::get('/profile', function () {
        return Inertia::render('Profile');
    })->name('profile');
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::patch('/profile/{id}', [AuthController::class, 'update'])->name('profile.update');
    Route::get('/homeUser', function () {
        return Inertia::render('Home');
    })->name('homeUser');

    Route::get('/{categoryId}/{itemId}', [ProductController::class, 'show'])
        ->name('show.product');
});

Route::resource('products', ProductController::class);
Route::resource('orders', OrderController::class);


Route::group(['middleware' => ['auth', EnsureIsAdmin::class]], function () {
    Route::resource('messages', MessageController::class);
      Route::get('/settings', function () {
        return Inertia::render('AdminPage/Settings');
    })->name('settings');
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('admin.dashboard');
    Route::get('/products',  function () {
        return Inertia::render('AdminPage/Products');
    })->name('admin.products');
    Route::get('/orders', [OrderController::class, 'index'])->name('admin.orders');
    Route::get('/messages', [MessageController::class, 'index'])->name('admin.messages');

    Route::get('/{id}', [ProductController::class, 'indexAdmin'])
        ->name('products.category');
  
});



// Fallback Route for 404 errors
Route::fallback(function () {
    return Inertia::render('ErrorPage');
});
