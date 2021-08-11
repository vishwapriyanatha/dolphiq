<?php


namespace App\Contracts\Repositories;


use App\Core\Contracts\BaseRepositoryInterface;

interface CustomerRepositoryInterface extends BaseRepositoryInterface
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
     * @param $where
     * @return mixed
     */
    public function show($whereData,$where);

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
