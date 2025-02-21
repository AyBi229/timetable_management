<?php

use Illuminate\Support\Facades\Route;

// home page
Route::get('/', function () {
    return inertia('Home');
});

Route::get('/login', function () {
    return inertia('Login');
});