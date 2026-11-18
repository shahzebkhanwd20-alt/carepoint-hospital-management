# CarePoint — Hospital Management System

A responsive React + Vite front-end demonstration built against the Hospital Management System internship brief. It uses fictional sample records and browser `localStorage`; it has no backend, database, server API, or production authentication.

## Implemented core requirements
- Mock role-based login for Admin, Doctor, and Receptionist, with role-aware protected sections.
- Dashboard KPI cards and revenue / department charts.
- Patients: search, status filter, pagination, add, edit, delete, and patient detail view.
- Doctors: searchable directory, specialization filter, and editable availability status.
- Appointments: create, reschedule, cancel, status changes, list and calendar views.
- Billing: invoice creation, paid/unpaid status, printable invoices.

## Implemented bonus features
- Light / dark mode (saved in localStorage).
- Appointment calendar view.
- CSV export for patient, appointment, and invoice tables; browser Print / Save as PDF for reports and printable invoices.
- Ward and bed availability tracker.
- Unit tests using Vitest.
- Semantic labels, keyboard-operable controls, responsive layouts, and print styles. Run Lighthouse to measure accessibility; a score of 90+ is a target, not guaranteed by the source code alone.

## Requirements
- Node.js 18 or later
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite (usually `http://localhost:5173`).

## Verify before deployment
```bash
npm test
npm run build
```

## Exporting data
Use the **CSV** button to download table data. Use **PDF / Print** and select “Save as PDF” in the browser print dialog. Individual invoices also have a print action.

## Demo roles
- **Admin:** access to all modules.
- **Doctor:** dashboard, patients, doctors, appointments, and wards / beds.
- **Receptionist:** dashboard, patients, doctors, appointments, and billing.

This is a front-end role simulation only. Do not use real patient information or treat its role checks as security controls.

## Deploy to Vercel
1. Push the project to a GitHub repository.
2. Import the repository in Vercel.
3. Keep the default Vite build command (`npm run build`) and output directory (`dist`).
4. Deploy. `vercel.json` includes an SPA rewrite so direct route refreshes return to `index.html`.

## Notes
- All records are fictional demo data.
- Data persists in the current browser using localStorage; clearing site data resets the app to seed records.
- Currency and chart values are sample values for demonstration.
