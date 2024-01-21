import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://qldiwmewjxtigtgzllhz.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsZGl3bWV3anh0aWd0Z3psbGh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU4NjE3NzIsImV4cCI6MjAyMTQzNzc3Mn0.PAWeY6xMVT338HVTZDgZYPWQHR1rIKYKs_VaHzsxUDY",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsZGl3bWV3anh0aWd0Z3psbGh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU4NjE3NzIsImV4cCI6MjAyMTQzNzc3Mn0.PAWeY6xMVT338HVTZDgZYPWQHR1rIKYKs_VaHzsxUDY"
    }
})