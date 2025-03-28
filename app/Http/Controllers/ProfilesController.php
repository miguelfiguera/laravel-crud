<?php

namespace App\Http\Controllers;

use App\Models\profile;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfilesController extends Controller
{

    public function index()
    {
        $profiles = profile::all();
        return Inertia::render('Profiles/ProfileIndex', ['profiles' => $profiles]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Profiles/CreateProfile');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'full_name' => 'required|string|max:255',
            'email' => 'required|email|unique:profiles,email',
            'phone' => 'required|string|unique:profiles,phone',
            'address' => 'required|string|max:255',
            'state' => 'required|string|max:255',
            'country' => 'required|string|max:255',
        ]);

        profile::create($request->all());

        return redirect()->route('profiles.index')
            ->with('success', 'Profile created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(profile $profile)
    {
        return Inertia::render('Profiles/Show', ['profile' => $profile]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(profile $profile)
    {
        return Inertia::render('Profiles/EditProfile', ['profile' => $profile]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, profile $profile)
    {
        $request->validate([
            'full_name' => 'required|string|max:255',
            'email' => 'required|email|unique:profiles,email,' . $profile->id,
            'phone' => 'required|string|unique:profiles,phone,' . $profile->id,
            'address' => 'required|string|max:255',
            'state' => 'required|string|max:255',
            'country' => 'required|string|max:255',
        ]);

        $profile->update($request->all());

        return redirect()->route('profiles.index')
            ->with('success', 'Profile updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(profile $profile)
    {

        $profile->delete();

        return redirect()->route('profiles.index')
            ->with('success', 'Profile deleted successfully.');
    }
}