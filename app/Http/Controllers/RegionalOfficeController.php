<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\RegionalOffice;
use Illuminate\Support\Facades\Redirect;

class RegionalOfficeController extends Controller
{
    function store(Request $req) {
        $validateData = $req->validate([
            'region' => 'required|string'
        ]);

        $regionalOffice = RegionalOffice::create($validateData);

        return Redirect::route('dashboard')
        ->with('success', 'Regional office created successfully!');
    }
}
