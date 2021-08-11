<?php


namespace App\Http\Controllers\V1;
use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    /**
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function logout(\Illuminate\Http\Request $request)
    {
        $request->session()->invalidate();
        return redirect('/');
    }
}
