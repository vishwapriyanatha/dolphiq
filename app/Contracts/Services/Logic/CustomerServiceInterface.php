<?php

namespace App\Contracts\Services\Logic;

use App\Core\Contracts\BaseServiceInterface;

interface CustomerServiceInterface extends BaseServiceInterface
{
    /**
     * @param $request
     * @return mixed
     */
    public function index($request);

    /**
     * @param $request
     * @return mixed
     */
    public function store($request);

    /**
     * @param $whereData
     * @param string $where
     * @return mixed
     */
    public function show($whereData,$where = 'id');

    /**
     * @param $customer
     * @param $id
     * @return mixed
     */
    public function update($customer, $id);

    /**
     * @param $id
     * @return mixed
     */
    public function destroy($id);

}
