<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\RegionalOffice;
use App\Models\Complex;
use App\Models\RegionalAdmin;
use App\Models\Institution;
use App\Models\InstitutionAdmin;
use App\Models\SuperAdmin;
use Inertia\Inertia;

class DashboardController extends Controller
{
    function index() {
        $regionalOffices = RegionalOffice::all();
        $complexes = Complex::all();
        $institutions = Institution::all();
        $admins = [
            'superadmins' => SuperAdmin::all(),
            'regional_admins' => RegionalAdmin::all(),
            'institution_admins' => InstitutionAdmin::all()
        ];

        return Inertia::render('Dashboard', [
            'regional_offices' => $regionalOffices,
            'complexes' => $complexes,
            'institutions' => $institutions,
            'admins' => $admins
        ]);
    }
}
