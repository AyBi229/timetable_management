<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\RegionalOfficeController;
use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

// home page
// method 1
// Route::get('/', function () {
//     return inertia('Home');
// });

// method 2
Route::get('/', function () {
    return Inertia::render('Home', ["app" => "Excelor"]);
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
    // dashboard
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    // regional offices
    Route::get('/regional-offices', [RegionalOfficeController::class, 'index']);
    Route::post('/regional-office', [RegionalOfficeController::class, 'store']);
    // logout
    Route::post('/logout', function (Request $request) {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return Inertia::location('/login');
    })->name('logout');
});

// jwks
Route::get('/jwks', function () {
    $jwks = json_decode(file_get_contents(storage_path('keys/jwks.json')), true);
    return response()->json($jwks);
});
