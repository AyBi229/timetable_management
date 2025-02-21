<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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