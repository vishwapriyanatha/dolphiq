<?php


namespace App\Transformers;

use App\Core\Contracts\BaseTransformerInterface;
use Illuminate\Http\Response;

class CustomerTransformers implements BaseTransformerInterface
{
    private $customer;

    public function __construct($responseData)
    {
        $this->customer = $responseData;
    }

    public function format()
    {
        return [
            'id' => $this->customer->id,
            'first_name' => $this->customer->first_name,
            'last_name' => $this->customer->last_name,
            'phone_number' => $this->customer->phone_number,
            'email_address' => $this->customer->email_address
        ];
    }
}
