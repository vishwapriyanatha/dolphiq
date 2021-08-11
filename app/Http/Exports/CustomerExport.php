<?php


namespace App\Http\Exports;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\FromCollection;

class CustomerExport implements FromCollection
{
    /**
     * @return Collection
     */
    public function collection()
    {
        return new Collection([
            CSV_HEADER,
            ['Jone', 'Doe', '+94777777777', 'jone.doe@test.com'],
            ['Jane', 'Doe', '+94777777777', 'jane.doe@test.com']
        ]);
    }
}
