<?php


namespace App\Services;

use App\Contracts\Services\Logic\CustomerServiceInterface;
use App\Contracts\Repositories\CustomerRepositoryInterface;
use App\Core\BaseAppService;
use Illuminate\Validation\ValidationException;
use App\Helpers\Helper;
use App\Http\Requests\CustomerImport;

class CustomerService extends BaseAppService implements CustomerServiceInterface
{
    /**
     * @var CustomerRepositoryInterface
     */
    private $customer;

    /**
     * CustomerService constructor.
     * @param CustomerRepositoryInterface $customer
     */
    public function __construct(CustomerRepositoryInterface $customer)
    {
        $this->customer = $customer;
    }

    /**
     * @param $request
     * @return \Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection|mixed
     */
    public function index($request = [])
    {
        return $this->customer->index($request);
    }

    /**
     * @param $request
     * @return mixed
     */
    public function store($request)
    {
        return $this->customer->store($request);
    }

    /**
     * @param $whereData
     * @param string $where
     * @return mixed
     */
    public function show($whereData, $where = 'id')
    {
        return $this->customer->show($whereData, $where);
    }

    /**
     * @param $customer
     * @param $id
     * @return mixed
     */
    public function update($id, $customer)
    {
        return $this->customer->update($customer, $id);
    }

    /**
     * @param $id
     * @return mixed
     */
    public function destroy($id)
    {
        return $this->customer->destroy($id);
    }

    /**
     * @param $file
     * @throws ValidationException
     */
    public function validateImportFile($file)
    {
        if (!$file->getClientOriginalExtension() == 'csv') {
            throw ValidationException::withMessages(['file' => 'File type must be CSV.']);
        }
        $lines = file($file, FILE_IGNORE_NEW_LINES);
        $headerDiff = array_diff(Helper::stringToArrayFormat($lines[0]), CSV_HEADER);
        if (!empty($headerDiff)) {
            throw ValidationException::withMessages(['file' => 'File headers not match.']);
        }
        unset($lines[0]);
        foreach ($lines as $line) {
            $dataArray = Helper::stringToArrayFormat($line);
            if (empty($dataArray)) {
                continue;
            }
            $response = [
                'first_name' => $dataArray[0],
                'last_name' => $dataArray[1],
                'phone_number' => $dataArray[2],
                'email_address' => $dataArray[3],
            ];
            $validData = Helper::validateImportData(new CustomerImport($response));
            if ($validData) {
                $this->customerImport($validData->all());
            }

        }

    }

    /**
     * @param $fileData
     */
    public function customerImport($fileData)
    {
        $isExist = $this->show($fileData['email_address'], 'email_address');
        if ($isExist) {
            $this->update($isExist->id, $fileData);
        } else {
            $this->store($fileData);
        }
    }
}
