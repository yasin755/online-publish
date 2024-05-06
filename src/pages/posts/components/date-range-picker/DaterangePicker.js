import React from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';


export default function DaterangePicker() {
    return (
      <div className='dateranger-picker-ct'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['SingleInputDateRangeField']}>
                <DateRangePicker
                format="DD MMMM YYYY"
                slots={{ field: SingleInputDateRangeField }}
                name="allowedRange"
                defaultValue={[dayjs('2024-05-01'), dayjs('2024-05-05')]}
                />
            </DemoContainer>
        </LocalizationProvider>
      </div>
    );
}