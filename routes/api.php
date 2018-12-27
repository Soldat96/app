<?php

use Illuminate\Http\Request;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('myuser', 'MyUserController');
Route::post('sort', 'MyUserController@sort');
