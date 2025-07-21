<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class ProductImageFactory extends Factory
{
    public function definition(): array
    {
        // 1. First try to get real images from storage
        $images = $this->getRandomProductImages();
        
        // 2. Fallback to placeholder if no images found
        if (empty($images)) {
            $images = $this->getPlaceholderImages();
        }

        return [
            'product_id' => Product::factory(),
            'images' => $images,
        ];
    }

    protected function getRandomProductImages(): array
    {
        $imageCategories = [
            'Eyeglasses_man',
            'Eyeglasses_women',
            'sunglasses_man', 
            'sunglasses_women',
            'Accessories',
        ];

        $images = [];
        $attempts = 0;
        $maxAttempts = 5;

        // Try multiple times to find valid images
        while (empty($images) && $attempts < $maxAttempts) {
            $imageCategory = $this->faker->randomElement($imageCategories);
            $categoryFolder = public_path("storage/data/{$imageCategory}");

            if (File::exists($categoryFolder)) {
                $allFiles = File::files($categoryFolder);
                
                if (!empty($allFiles)) {
                    $productNumbers = collect($allFiles)
                        ->map(fn ($file) => explode('-', $file->getFilename())[0])
                        ->unique()
                        ->values()
                        ->toArray();

                    $productNumber = $this->faker->randomElement($productNumbers);

                    for ($i = 1; $i <= 3; $i++) {
                        $path = "storage/data/{$imageCategory}/{$productNumber}-{$i}.webp";
                        if (file_exists(public_path($path))) {
                            $images[] = $path;
                        }
                    }
                }
            }
            $attempts++;
        }

        return $images;
    }

    protected function getPlaceholderImages(): array
    {
        // Generate 1-3 placeholder image paths
        $count = $this->faker->numberBetween(1, 3);
        $images = [];
        
        for ($i = 1; $i <= $count; $i++) {
            $images[] = "storage/data/placeholders/product-{$i}.jpg";
        }

        return $images;
    }
}