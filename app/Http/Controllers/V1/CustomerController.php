<?php

namespace App\Http\Controllers\V1;

use App\Services\CustomerService;
use App\Core\BaseController;
use App\Transformers\CustomerTransformers;
use Illuminate\Http\Request;
use App\Http\Requests\CustomerUpdate;
use App\Http\Requests\CustomerCreate;
use App\Http\Requests\CsvFileImport;
use App\Http\Exports\CustomerExport;
use Maatwebsite\Excel\Facades\Excel;

class CustomerController extends BaseController
{
    /**
     * @var CustomerService
     */
    private $customer;

    /**
     * CustomerController constructor.
     * @param CustomerService $customer
     */
    public function __construct(CustomerService $customer)
    {
        $this->customer = $customer;
    }

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        return $this->successResponse(
            'Successfully customers fetch',
            200,
            $this->customer->index($request->all()));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param CustomerCreate $customer
     * @return mixed
     */
    public function store(CustomerCreate $customer)
    {
        $createCustomer = $this->customer->store($customer->all());
        if (!$createCustomer) {
            return $this->errorResponse('Error occurred please try again later');
        }
        return $this->successResponse(
            'Successfully create customer',
            200,
            (new CustomerTransformers($createCustomer))->format());
    }

    /**
     * Display the specified resource.
     *
     * @param $id
     * @return mixed
     */
    public function show($id)
    {
        $viewCustomer = $this->customer->show($id);

        if (!$viewCustomer) {
            return $this->errorResponse('Could not found Customer.');
        }

        return $this->successResponse(
            'Customer data',
            200,
            (new CustomerTransformers($viewCustomer))->format());
    }

    /**
     * Update the specified resource in storage.
     * @param CustomerUpdate $customer
     * @param $id
     * @return mixed
     */
    public function update(CustomerUpdate $customer, $id)
    {
        $updateCustomer = $this->customer->update($id, $customer->all());
        if (!$updateCustomer) {
            return $this->errorResponse('Error occurred please try again later');
        }
        return $this->successResponse(
            'Successfully update Customer.',
            200,
            (new CustomerTransformers($updateCustomer))->format());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param $id
     * @return mixed
     */
    public function destroy($id)
    {
        $deleteCustomer = $this->customer->destroy($id);

        if (!$deleteCustomer) {
            return $this->errorResponse('Could not found Customer.');
        }

        return $this->successResponse('Successfully deleted Customer.', 204);
    }

    /**
     * @return \Symfony\Component\HttpFoundation\BinaryFileResponse
     */
    public function customerExport()
    {
        return Excel::download(new CustomerExport, 'customer.csv');
    }

    /**
     * @param CsvFileImport $request
     * @throws \Illuminate\Validation\ValidationException
     */
    public function customerImport(CsvFileImport $request)
    {
        $file = $request->file('file');
       return $this->customer->validateImportFile($file);
    }
}
