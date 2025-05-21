<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function store(Request $request) {
        // validation
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        // 2. Attempt to log the user in
        if (Auth::attempt($credentials)) {
            // 3. Prevent session fixation
            $request->session()->regenerate();

            return redirect()->intended('/dashboard'); // or wherever
        }

        // 4. If login fails, return error
        return back()->withErrors([
            'email' => 'The provided credentials are incorrect.',
        ])->onlyInput('email'); // keeps email filled, clears password
    }
}
