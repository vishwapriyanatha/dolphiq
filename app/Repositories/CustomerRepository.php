<?php


namespace App\Repositories;
use App\Contracts\Repositories\CustomerRepositoryInterface;
use App\Core\BaseRepository;
use App\Entities\Customer;

class CustomerRepository extends BaseRepository implements CustomerRepositoryInterface
{
    /**
     * @var Customer
     */
    private $customer;

    /**
     * CustomerRepository constructor.
     * @param Customer $customer
     */
    public function __construct(Customer $customer)
    {
        $this->customer = $customer;
    }

    /**
     * @param $request
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator|mixed
     */
    public function index($request)
    {
        $perPage = isset($request['rowsPerPage']) ? $request['rowsPerPage'] : 10;
        return $this->customer
            ->where(function ($q) use ($request) {
                if (isset($request['filter']) && !empty($request['filter'])) {
                    $q->where('first_name', 'like', '%' . $request['filter'] . '%')
                        ->orWhere('last_name', 'like', '%' . $request['filter'] . '%')
                        ->orWhere('phone_number', 'like', '%' . $request['filter'] . '%')
                        ->orWhere('email_address', 'like', '%' . $request['filter'] . '%');
                }
            })
            ->paginate($perPage);
    }

    /**
     * @param $request
     * @return bool
     */
    public function store($request)
    {
        try {
            return $this->customer
                ->create($request);
        } catch (\Exception $exception) {
            return false;
        }
    }

    /**
     * @param $whereData
     * @param $where
     * @return mixed
     */
    public function show($whereData, $where)
    {
        return $this->customer
            ->where($where, $whereData)
            ->first();
    }

    /**
     * @param $request
     * @param $id
     * @return bool
     */
    public function update($request, $id)
    {
        try {
            return $this->customer
                ->where('id', $id)
                ->update($request);
        } catch (\Exception $exception) {
            return false;
        }
    }

    /**
     * @param $id
     * @return mixed
     */
    public function destroy($id)
    {
        return $this->customer
            ->where('id', $id)
            ->delete();
    }
}
