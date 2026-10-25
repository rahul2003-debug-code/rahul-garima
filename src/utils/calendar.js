// Calendar integration utilities for Google Calendar & Apple/Outlook iCalendar (.ics)

export function generateGoogleCalendarUrl(event) {
  const startDate = new Date(event.isoDateTime);
  // Default duration: 4 hours
  const endDate = new Date(startDate.getTime() + 4 * 60 * 60 * 1000);

  const formatTime = (d) =>
    d.toISOString().replace(/-|:|\.\d\d\d/g, "");

  const title = encodeURIComponent(`Rahul ❤️ Garima — ${event.titleHi} (${event.titleEn})`);
  const details = encodeURIComponent(
    `${event.descriptionHi}\n\n${event.descriptionEn}\n\nसुपुत्र: चि० राहुल कुमार\nसुपुत्री: आयु० गरिमा वर्मा\nसंपर्क: 8052797334, 8173087391`
  );
  const location = encodeURIComponent(
    event.venueNote ? `${event.venueNote}, गाजीपुर (उ. प्र.)` : "गाजीपुर (उ. प्र.)"
  );

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${formatTime(
    startDate
  )}/${formatTime(endDate)}&details=${details}&location=${location}&ctz=Asia/Kolkata`;
}

export function downloadIcsFile(event) {
  const startDate = new Date(event.isoDateTime);
  const endDate = new Date(startDate.getTime() + 4 * 60 * 60 * 1000);

  const formatIcsDate = (d) =>
    d.toISOString().replace(/-|:|\.\d\d\d/g, "");

  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Rahul and Garima//Wedding Invitation//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${event.id}-rahul-garima-2026@wedding.invitation`,
    `DTSTAMP:${formatIcsDate(new Date())}`,
    `DTSTART:${formatIcsDate(startDate)}`,
    `DTEND:${formatIcsDate(endDate)}`,
    `SUMMARY:Rahul ❤️ Garima — ${event.titleHi} (${event.titleEn})`,
    `DESCRIPTION:${event.descriptionHi} - ${event.descriptionEn}`,
    `LOCATION:${event.venueNote || "गाजीपुर (उ. प्र.)"}`,
    "STATUS:CONFIRMED",
    "BEGIN:VALARM",
    "TRIGGER:-PT24H",
    "ACTION:DISPLAY",
    `DESCRIPTION:Reminder: Rahul & Garima Wedding Event - ${event.titleHi}`,
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute("download", `Rahul-Garima-${event.id}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
