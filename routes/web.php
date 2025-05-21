<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\RegionalOfficeController;

// home page
// method 1
// Route::get('/', function () {
//     return inertia('Home');
// });

// method 2
Route::get('/', function () {
    return Inertia::render('Home', ["name" => "Aya"]);
});

// method 3
// Route::inertia('/', 'Home');

// login page
Route::get('/login', function () {
    return Inertia::render('Login');
});
Route::post('/login', [LoginController::class, 'store'])->name('login');

// signup page
Route::get('/signup', function () {
    return Inertia::render('Signup');
});

// protected routes
Route::middleware('auth')->group(function () {
    Route::get('/dashboard', fn () => inertia('Dashboard'));
    // regional offices
    Route::post('/regional-office', [RegionalOfficeController::class, 'store']);
});

// jwks
Route::get('/jwks', function () {
    $jwks = json_decode(file_get_contents(storage_path('keys/jwks.json')), true);
    return response()->json($jwks);
});
