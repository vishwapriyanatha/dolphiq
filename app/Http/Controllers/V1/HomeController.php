<?php

namespace App\Http\Controllers\V1;
use App\Http\Controllers\Controller;

class HomeController extends Controller
{


    /**
     * HomeController constructor.
     */
    public function __construct()
    {

    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }



    public function getLogUserData()
    {
        $data['user'] = \Auth::user()->name;
        return $data;
    }
}
