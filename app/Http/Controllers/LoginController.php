<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Symfony\Contracts\Service\Attribute\Required;

class LoginController extends Controller
{
    public function register(Request $request)
    {
       $request->validate([
        'name' => ['required'],
        'email' => ['required', 'email', 'unique:users'],
        'password' => ['required', 'min:6', 'confirmed']
       ]);

       User::create([
        'name' => $request->name,
        'email' => $request->email,
        'password' => Hash::make($request->password)
       ]);

       return response()->json(['status'=> 'Customer created']);
    }


    public function login(Request $request)
    {
       
    }
}
