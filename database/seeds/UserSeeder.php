<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data['name'] = 'Vishwa Priyanatha';
        $data['email'] = 'vishwapriyanatha@gmail.com';
        $data['password'] = '$2y$10$4H0D2SluJvW6O56zeiZaOum20nA6NOBiX7IgyuzB.No81MZrkXULO';
        \App\User::create($data);
    }
}
