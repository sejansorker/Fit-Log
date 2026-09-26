#  FitLog — Workout Library

FitLog is a dark-themed, no-nonsense gym companion web app where users can browse a library of workouts, add lifts to today's plan, save workouts for later, and track daily exercise progress.

##  Live Demo
- **Live Link:  https://fit-log-sejan.vercel.app/
- **GitHub Repository:  https://github.com/sejansorker/Fit-Log

##  Technologies Used
- **Next.js** (App Router) — page routing & rendering
- **React Context API** — global state management (workout data, plan/saved state)
- **Tailwind CSS** — styling and responsive design
- **Axios** — API data fetching
- **React Hot Toast** — toast notifications
- **Lucide React** — icons
- **localStorage** — persisting plan/saved data across reloads

##  Key Features
1. **Responsive Workout Library** — Browse all workouts in a responsive grid (3 columns on desktop, 2 on tablet, 1 on mobile), each card showing image, category tags, equipment, and stats (duration, calories, rating).
2. **Workout Details Page** — Dedicated page for each workout with full specs, step-by-step instructions, and action buttons to add it to today's plan or save it for later.
3. **Live Navbar Badges** — "Plan" and "Saved" badge counters in the navbar update in real time as workouts are added or removed.
4. **My Plan Page with Tabs** — Switch between "Today's Plan" and "Saved" tabs, view live metrics (exercises, minutes, calories), sort by duration/calories/rating, mark workouts as done, and remove items.
5. **Persistent State** — Plan and saved workouts are stored in `localStorage`, so your progress survives a page reload.
6. **Toast Notifications** — Instant feedback (via react-hot-toast) whenever a workout is added, saved, marked done, or removed.
7. **Custom 404 Page** — A friendly not-found page for any invalid route.
8. **Plan Cap Enforcement** — Today's Plan is capped at 5 workouts, with a toast warning when the limit is reached.

##  Project Structure