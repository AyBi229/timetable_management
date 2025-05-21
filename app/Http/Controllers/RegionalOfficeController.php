<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Models\RegionalOffice;

class RegionalOfficeController extends Controller
{
    function store(Request $req) {
        $validateData = $req->validate([
            'region' => 'required|string'
        ]);

        $regionalOffice = RegionalOffice::create($validateData);

        return response()->json([
            'message' => 'Product created successfully!',
            'product' => $product
        ], 201);
    }
}
