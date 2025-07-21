<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class cartItem extends Model
{
    /** @use HasFactory<\Database\Factories\CartItemFactory> */
    use HasFactory;
    protected $fillable = [
        'product_id', 
        'quantity',
        // Add any other columns that should be mass assignable
    ];

    public function product(){
        return $this->belongsTo(Product::class);
    }
}
