import { useEffect, useState } from "react";

const CAL_ID = import.meta.env.VITE_CAL_ID;
const API_KEY = import.meta.env.VITE_GOOGLE_API;

function Concerts() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeMin = new Date().toISOString(); // upcoming only
    const url = new URL(
      `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
        CAL_ID
      )}/events`
    );
    url.searchParams.set("key", API_KEY);
    url.searchParams.set("singleEvents", "true");
    url.searchParams.set("orderBy", "startTime");
    url.searchParams.set("timeMin", timeMin);
    url.searchParams.set("maxResults", "50");

    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        const items = (data.items || []).map((ev) => ({
          id: ev.id,
          title: ev.summary,
          start: ev.start.dateTime || ev.start.date, // all-day => date
          end: ev.end?.dateTime || ev.end?.date,
          venue: ev.location || "",
          link: ev.htmlLink,
        }));
        setEvents(items);
      })
      .catch((err) => console.error("Error fetching events:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading shows…</p>;
  if (!events.length) return <p>No upcoming shows yet. Check back soon!</p>;

  return (
    <section className="concerts">
      <h2>Upcoming Shows</h2>
      <ul>
        {events.map((ev) => {
          const dt = new Date(ev.start);
          const friendly = dt.toLocaleString(undefined, {
            weekday: "short",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          });
          return (
            <li key={ev.id} className="concert">
              <div className="when">{friendly}</div>
              <div className="what">{ev.title}</div>
              {ev.venue && <div className="where">{ev.venue}</div>}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Concerts;
