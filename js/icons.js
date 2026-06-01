const Icon = ({ name, size = 16, color = "currentColor" }) => {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  switch (name) {
    case "search":
      return (
        <svg {...props}>
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      );
    case "help":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M9.5 9a2.5 2.5 0 1 1 4.5 1.7c-.7.5-1.5 1.1-1.5 2.3" />
          <circle cx="12" cy="17" r="0.7" fill={color} stroke="none" />
        </svg>
      );
    case "bell":
      return (
        <svg {...props}>
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </svg>
      );
    case "user":
      return (
        <svg {...props}>
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21a8 8 0 0 1 16 0" />
        </svg>
      );
    case "chevron-down":
      return (
        <svg {...props} strokeWidth={1.6}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      );
    case "chevron-right":
      return (
        <svg {...props} strokeWidth={1.6}>
          <path d="m9 6 6 6-6 6" />
        </svg>
      );
    case "arrow-left":
      return (
        <svg {...props}>
          <path d="m19 12H5" />
          <path d="m12 19-7-7 7-7" />
        </svg>
      );
    case "menu":
      return (
        <svg {...props}>
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      );
    case "edit":
      return (
        <svg {...props}>
          <path d="M11 4H4v16h16v-7" />
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
      );
    case "info":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <line x1="12" x2="12" y1="11" y2="17" />
          <circle cx="12" cy="7.5" r="0.7" fill={color} stroke="none" />
        </svg>
      );
    case "check":
      return (
        <svg {...props}>
          <path d="M20 6 9 17l-5-5" />
        </svg>
      );
    case "save":
      return (
        <svg {...props}>
          <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
          <polyline points="17 21 17 13 7 13 7 21" />
          <polyline points="7 3 7 8 15 8" />
        </svg>
      );
    case "print":
      return (
        <svg {...props}>
          <polyline points="6 9 6 2 18 2 18 9" />
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
          <rect width="12" height="8" x="6" y="14" />
        </svg>
      );
    case "people":
      return (
        <svg {...props}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "back-prev":
      return (
        <svg {...props}>
          <polyline points="11 17 6 12 11 7" />
          <polyline points="18 17 13 12 18 7" />
        </svg>
      );
    case "fwd":
      return (
        <svg {...props}>
          <polyline points="13 17 18 12 13 7" />
          <polyline points="6 17 11 12 6 7" />
        </svg>
      );
    case "list":
      return (
        <svg {...props}>
          <line x1="8" x2="21" y1="6" y2="6" />
          <line x1="8" x2="21" y1="12" y2="12" />
          <line x1="8" x2="21" y1="18" y2="18" />
          <line x1="3" x2="3.01" y1="6" y2="6" />
          <line x1="3" x2="3.01" y1="12" y2="12" />
          <line x1="3" x2="3.01" y1="18" y2="18" />
        </svg>
      );
    case "tab-solic":
      return (
        <svg {...props}>
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21a8 8 0 0 1 16 0" />
        </svg>
      );
    case "tab-people":
      return (
        <svg {...props}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "tab-pin":
      return (
        <svg {...props}>
          <path d="M12 22s8-6 8-12a8 8 0 1 0-16 0c0 6 8 12 8 12z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case "tab-doc":
      return (
        <svg {...props}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="8" x2="16" y1="13" y2="13" />
          <line x1="8" x2="16" y1="17" y2="17" />
        </svg>
      );
    case "tab-arrow":
      return (
        <svg {...props}>
          <path d="M9 18l6-6-6-6" />
          <path d="M3 18l6-6-6-6" />
        </svg>
      );
    case "tab-cog":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33h0a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h0a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      );
    case "tab-cost":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <line x1="12" x2="12" y1="7" y2="17" />
          <path d="M15 9.5C15 8.119 13.657 7 12 7s-3 1.119-3 2.5S10.343 12 12 12s3 1.119 3 2.5S13.657 17 12 17s-3-1.119-3-2.5" />
        </svg>
      );
    case "table":
      return (
        <svg {...props}>
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <line x1="3" x2="21" y1="9" y2="9" />
          <line x1="3" x2="21" y1="15" y2="15" />
          <line x1="9" x2="9" y1="3" y2="21" />
          <line x1="15" x2="15" y1="3" y2="21" />
        </svg>
      );
    case "doc-attach":
      return (
        <svg {...props}>
          <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
        </svg>
      );
    case "external":
      return (
        <svg {...props}>
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" x2="21" y1="14" y2="3" />
        </svg>
      );
    case "play":
      return (
        <svg {...props}>
          <polygon
            points="6 3 20 12 6 21 6 3"
            fill={color}
            stroke={color}
            strokeLinejoin="round"
          />
        </svg>
      );
    case "lock":
      return (
        <svg {...props}>
          <rect width="14" height="11" x="5" y="11" rx="2" />
          <path d="M8 11V7a4 4 0 0 1 8 0v4" />
        </svg>
      );
    case "refresh":
      return (
        <svg {...props}>
          <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
          <path d="M21 3v5h-5" />
          <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
          <path d="M3 21v-5h5" />
        </svg>
      );
    case "monitor":
      return (
        <svg {...props}>
          <rect width="20" height="14" x="2" y="3" rx="2" />
          <line x1="8" x2="16" y1="21" y2="21" />
          <line x1="12" x2="12" y1="17" y2="21" />
        </svg>
      );
    case "layers":
      return (
        <svg {...props}>
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
    case "x":
      return (
        <svg {...props}>
          <line x1="18" x2="6" y1="6" y2="18" />
          <line x1="6" x2="18" y1="6" y2="18" />
        </svg>
      );
    case "cursor":
      return (
        <svg {...props}>
          <path d="m4 4 7 17 2.5-7L20 11.5 4 4z" fill={color} />
        </svg>
      );
    case "spinner":
      return (
        <svg {...props}>
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
      );
    default:
      return null;
  }
};

