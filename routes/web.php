<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfilesController;
use Inertia\Inertia;

Route::get("/", function () {
    //return Inertia::render("Profiles/ProfileIndex");
    return redirect()->route("profiles.index");
})->name("home");

Route::resource('profiles', ProfilesController::class);

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
