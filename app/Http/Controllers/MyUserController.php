<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\MyUser;

class MyUserController extends Controller
{
    public function index()
    {
        $myUsers = MyUser::all();
        return response()->json($myUsers);
    }

    public function store(Request $request)
    {
        $myUser = new MyUser([
            'first_name' => $request->get('first_name'),
            'middle_name' => $request->get('middle_name'),
            'last_name' => $request->get('last_name'),
            'address' => $request->get('address'),
            'phone_number' => $request->get('phone_number')
        ]);
        $myUser->save();
    }

    public function edit($id)
    {
        $myUser = MyUser::find($id);
        return response()->json($myUser);
    }

    public function update(Request $request, $id)
    {
        $myUser = MyUser::find($id);
        $myUser->first_name = $request->get('first_name');
        $myUser->middle_name = $request->get('middle_name');
        $myUser->last_name = $request->get('last_name');
        $myUser->address = $request->get('address');
        $myUser->phone_number = $request->get('phone_number');
        $myUser->save();
    }

    public function destroy($id)
    {
        $myUser = MyUser::find($id);
        $myUser->delete();
    }

    public function sort(Request $request)
    {
        $fieldName = $request->get('fieldName');
        $myUsers = MyUser::orderBy($fieldName)->get();
        return response()->json($myUsers);
    }
}
