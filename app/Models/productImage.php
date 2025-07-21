<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class productImage extends Model
{
    /** @use HasFactory<\Database\Factories\ProductImageFactory> */
    use HasFactory;
   
    protected $fillable = ['product_id', 'images', 'image_count'];
    
    protected $casts = [
        'images' => 'array'
    ];
    
    public function product()
    {
        return $this->belongsTo(Product::class);
    }
    
    // Helper method to get full image URLs
    public function getImageUrlsAttribute()
    {
        return array_map(function($path) {
            return asset($path);
        }, $this->images ?? []);
    }
}
