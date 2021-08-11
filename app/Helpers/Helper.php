<?php


namespace App\Helpers;

use Illuminate\Support\Facades\Validator;

class Helper
{
    /**
     * @param $string
     * @return array
     */
    public static function stringToArrayFormat($string): array
    {
        return explode(',', str_replace('"', '', $string));
    }

    /**
     * @param $fileData
     * @return mixed
     */
    public static function validateImportData($fileData)
    {
        $validator = Validator::make($fileData->all(), [
            'first_name' => ['required', 'string'],
            'last_name' => ['required', 'string'],
            'phone_number' => ['required', 'string'],
            'email_address' => ['required', 'email']
        ]);
        if (!$validator->fails()) {
            return $fileData;
        }
    }
}
