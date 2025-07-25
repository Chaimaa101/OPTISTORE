<?php

namespace App\Http\Controllers;

use App\Models\brand;
use App\Models\category;
use App\Models\Product;
use App\Models\productImage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
   public function indexAdmin($id)
{
  
    $brands = brand::all();
    $categories = Category::all(); // Make sure you're also passing categories
    
    $category = Category::findOrFail($id);
    $products = Product::where('category_id', $id)
        ->with(['images', 'brand', 'category'])
        ->get();

    return Inertia::render('AdminPage/Products/ProductsDetails', [
        'products' => $products,
        'category' => $category->name,
        'brands' => $brands,
        'categories' => $categories,
    ]);
}

public function index($id)
{
    $category = Category::findOrFail($id);
    $products = Product::where('category_id', $id)
        ->with(['images', 'brand'])
        ->get();

    return Inertia::render('ListProducts', [
        'products' => $products,
        'category' => $category->name
    ]);
}

    /** 
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'nullable|string|max:255|unique:products,slug',
            'quantity' => 'required|integer|min:0',
            'description' => 'required|string',
            'published' => 'required|boolean',
            'inStock' => 'required|boolean',
            'sold' => 'required|boolean',
            'price' => 'required|numeric|min:0',
            'color' => 'required|string|max:50',
            'category_id' => 'required|exists:categories,id',
            'brand_id' => 'required|exists:brands,id',
              'images' => 'required|array|max:3',
        'images.*' => 'image|mimes:jpeg,png,jpg,gif|max:2048'
        ]);

        $product = Product::create($validatedData);

        if ($request->hasFile('images')) {
        $imagePaths = [];
        
        foreach ($request->file('images') as $image) {
            $path = $image->store('products', 'public');
            $imagePaths[] = "storage/{$path}";
        }

        ProductImage::create([
            'product_id' => $product->id,
            'images' => $imagePaths
        ]);
    }
        return redirect()->back()
                ->with('success', 'Product created successfully!');
    }

    /**
     * Display the specified resource.
     */
  public function show($categoryId, $itemId)
{
    $product = Product::with(['images','category', 'brand'])->find($itemId);

    if (!$product) {
        abort(404); // Let Laravel handle the 404 gracefully
    }

    return Inertia::render('components/SingleProduct/SingleProductPage', [
        'product' => $product,
        'categoryId' => $categoryId
    ]);
}




    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
{
    $validatedData = $request->validate([
        'title' => 'sometimes|string|max:255',
        'slug' => 'sometimes|string|max:255|unique:products,slug,' . $product->id,
        'quantity' => 'sometimes|integer|min:0',
        'description' => 'sometimes|string',
        'published' => 'sometimes|boolean',
        'inStock' => 'sometimes|boolean',
        'sold' => 'sometimes|boolean',
        'price' => 'sometimes|numeric|min:0',
        'color' => 'sometimes|string|max:50',
        'category_id' => 'sometimes|exists:categories,id',
        'brand_id' => 'sometimes|exists:brands,id',
    ]);

    $product->update($validatedData);

    return redirect()->back()
                ->with('success', 'Product updated successfully!');
}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();
        return redirect()->back()
                ->with('success', 'Product deleted successfully!');
    }
}