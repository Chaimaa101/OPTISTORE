<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use HasFactory;
    use SoftDeletes;
    
    protected $fillable = [
        'title', 'slug', 'quantity', 'description', 
        'published', 'inStock', 'isNew', 'sold',
        'price', 'color', 'brand_id', 'category_id',
        'created_by', 'updated_by', 'deleted_by'
    ];
    
    // Relationships
    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }
    
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    
    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }
      public function images()
    {
        return $this->hasMany(productImage::class);
    }
}