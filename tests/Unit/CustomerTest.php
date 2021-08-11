<?php

namespace Tests\Unit;

use App\Services\CustomerService;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use App\Models\Customer;

class CustomerTest extends TestCase
{
    use DatabaseTransactions;

    public function setUp(): void
    {
        parent::setUp();

    }
    /**
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     */
    public function testCustomerStore()
    {
        $customerCreateData  = [
            'first_name' => 'unit',
            'last_name' => 'test',
            'phone_number' => '222222222',
            'email_address' => 'unit@test.com',
        ];

        $customerCreateService = $this->app->make(CustomerService::class);
        $response = $customerCreateService->store($customerCreateData );
        $this->assertArrayHasKey('Created', $response);
    }

    /**
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     */
    public function testCustomerUpdate()
    {
        $customer = \factory(Customer::class, 1)->create();

        $customerCreateData = [
            'id'=>$customer[0]->id,
            'first_name' => $customer[0]->first_name,
            'last_name' => 'update',
            'phone_number' => $customer[0]->phone_number,
            'email_address' => $customer[0]->email_address,
        ];

        $customerCreateService = $this->app->make(CustomerService::class);
        $response = $customerCreateService->update($customer[0]->id,$customerCreateData);
        $lastName = '';
        if($response){
            $lastName = 'update';
        }
        $this->assertEquals('update', $lastName);
    }

    /**
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     */
    public function testCustomerDelete()
    {
        $customer = \factory(Customer::class, 1)->create();

        $customerDestroyService = $this->app->make(CustomerService::class);
        $response = $customerDestroyService->destroy($customer[0]->id);
        $this->assertTrue(true === (boolean)$response);

        $customerFetchService = $this->app->make(CustomerService::class);
        $exist = $customerFetchService->show($customer[0]->id);
        $this->assertTrue(true == !$exist);
    }

    /**
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     */
    public function testFetchCustomer()
    {
        $customer = \factory(Customer::class, 1)->create();

        $customerFetchService = $this->app->make(CustomerService::class);
        $exist = $customerFetchService->show($customer[0]->id);
        $this->assertTrue(true == !$exist);
    }
}
