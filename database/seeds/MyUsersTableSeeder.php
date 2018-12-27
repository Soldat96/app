<?php

use Illuminate\Database\Seeder;
use Faker\Factory;
use App\MyUser;

class MyUsersTableSeeder extends Seeder
{
    public function run()
    {
        $faker = Factory::create('ru_RU');

        for ($i = 0; $i < 10; $i++) {
            $full_name = explode(' ', $faker->name);

            MyUser::create([
                'first_name' => $full_name[0],
                'middle_name' => $full_name[1],
                'last_name' => $full_name[2],
                'address' => $faker->address,
                'phone_number' => $faker->phoneNumber
            ]);
        }
    }
}
