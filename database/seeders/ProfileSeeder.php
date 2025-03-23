<?php

namespace Database\Seeders;

use App\Models\profile; // Import the Profile model
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Faker\Factory as Faker;

class ProfileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create(); // Create a Faker instance

        // Example: Create 10 fake profiles
        for ($i = 0; $i < 10; $i++) {
            profile::create([
                'full_name' => $faker->name,
                'email' => $faker->unique()->safeEmail,
                'phone' => $faker->unique()->phoneNumber,
                'address' => $faker->address,
                'state' => $faker->state,
                'country' => $faker->country,
            ]);
        }
    }
}