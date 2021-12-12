import * as React from "react"

function WelcomeFarmer(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      contentScriptType="text/ecmascript"
      width={350}
      height={250}
      viewBox="145 0 800 800"
      {...props}
    >
      <Defs/>
    </svg>
  )
}



function WelcomeFarmerModal(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      contentScriptType="text/ecmascript"
      width={100}
      height={200}
      viewBox="160 0 800 800"
      {...props}
    >
      <Defs/>
    </svg>
  )
}

function WelcomeFarmerSidebar(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      contentScriptType="text/ecmascript"
      width={320}
      height={220}
      viewBox="60 40 800 800"
      {...props}
    >
      <Defs/>
    </svg>
  )
}


function Defs(){
  return (
    <>
    <defs>
        <clipPath id="prefix__a">
          <path d="M107 483.242h797.5V757H107zm0 0" />
        </clipPath>
        <clipPath id="prefix__b">
          <path d="M105 483.242h799.5V759H105zm0 0" />
        </clipPath>
        <clipPath id="prefix__c">
          <path d="M211 483.242h488v276.75H211zm0 0" />
        </clipPath>
        <clipPath id="prefix__d">
          <path d="M208 483.242h493v276.75H208zm0 0" />
        </clipPath>
        <clipPath id="prefix__e">
          <path d="M460.164 589H579v172H460.164zm0 0" />
        </clipPath>
      </defs>
      <g clipPath="url(#prefix__a)">
        <path
          fill="#6C5148"
          d="M494.66 483.453c-34.512 4.672-125.652 16.742-137.035 34.496-8.371 13.051 123.676 25 58.941 40.242-80.113 18.86-187.988 29.02-278.492 58.446-143.172 46.547 261.66 116.812 322.696 137.972l443.527 1.493C637.324 704.21 218.895 650.727 310.488 623.34c91.934-27.488 108.492-30.965 193.032-58.445 61.582-20.024-92.817-39.06-110.516-48.868-27.254-15.097 82.687-27.355 109.379-32.297zm0 0"
        />
      </g>
      <g clipPath="url(#prefix__b)">
        <path
          transform="matrix(.51573 0 0 .51507 -49.642 213.23)"
          fill="none"
          d="M1055.403 524.63c-66.918 9.07-243.64 32.504-265.711 66.973-16.232 25.337 239.807 48.536 114.287 78.128-155.34 36.615-364.51 56.34-539.997 113.47-277.61 90.369 507.36 226.787 625.707 267.869l860.001 2.897C1332.03 953.223 520.693 849.385 698.293 796.215c178.26-53.368 210.367-60.117 374.289-113.47 119.407-38.874-179.972-75.83-214.29-94.874-52.846-29.311 160.33-53.11 212.086-62.703zm0 0"
          stroke="#000"
          strokeWidth={0.807}
        />
      </g>
      <g clipPath="url(#prefix__c)">
        <path
          fill="#FFF"
          d="M497.754 483.793a1670.807 1670.807 0 00-34.672 4.95c-14.094 2.175-28.168 4.542-42.148 7.378-6.414 1.305-12.813 2.707-19.16 4.324-5.184 1.32-10.344 2.762-15.376 4.602-1.925.703-3.836 1.473-5.687 2.375-1.406.687-2.797 1.453-4.055 2.426-.87.664-1.715 1.464-2.199 2.52a3.24 3.24 0 00-.297 1.335c.008.473.125.93.328 1.34.203.402.5.723.805.984.43.383.898.7 1.371.993 1.371.843 2.836 1.503 4.3 2.12 2.016.856 4.067 1.61 6.13 2.333a237.88 237.88 0 007.617 2.515c6.078 1.91 12.2 3.68 18.32 5.434 6.692 1.914 13.39 3.797 20.074 5.726 6.364 1.836 12.711 3.704 19.012 5.72 5.106 1.636 10.192 3.331 15.11 5.405 1.777.747 3.523 1.54 5.183 2.473 1.14.652 2.246 1.317 3.078 2.207.27.293.5.586.617.89.086.227.125.466.075.65-.04.218-.211.44-.418.655-.309.309-.715.547-1.157.77-.48.242-1.003.434-1.55.633-.864.312-1.746.601-2.633.886-2.695.86-5.418 1.649-8.149 2.43-8.601 2.453-17.253 4.746-25.91 7.024-25.074 6.593-50.218 12.925-75.37 19.238-26.165 6.566-52.352 13.07-78.528 19.59-9.961 2.48-19.918 4.96-29.871 7.465-5.992 1.507-11.992 3-17.977 4.601-3.765 1.008-7.527 2.172-11.172 3.688-2.59 1.07-5.175 2.34-7.507 4.086a15.874 15.874 0 00-2.461 2.254 9.961 9.961 0 00-1.598 2.449 7.714 7.714 0 00-.668 2.64c-.059.926.055 1.84.3 2.7.614 2.046 1.81 3.765 3.134 5.191 1.8 1.973 3.875 3.605 5.996 5.066 2.77 1.914 5.68 3.582 8.625 5.125 3.625 1.903 7.336 3.621 11.074 5.235 9.406 4.066 19.039 7.535 28.722 10.773 11.942 3.996 24 7.617 36.102 11.051 28.988 8.227 58.254 15.406 87.59 22.203 32.14 7.445 64.398 14.375 96.703 21.04 30.668 6.32 61.387 12.386 92.133 18.308 24.61 4.738 49.234 9.37 73.855 14.011a5657.652 5657.652 0 0125.778 4.903c3.117.601 6.234 1.21 9.34 1.836 2.238.449 4.468.902 6.675 1.39l1.098-5.035a400.304 400.304 0 00-6.774-1.375 1323.71 1323.71 0 00-9.39-1.797c-8.606-1.62-17.219-3.195-25.824-4.773-24.645-4.52-49.285-9.027-73.903-13.64-30.761-5.762-61.492-11.673-92.172-17.837-32.316-6.492-64.578-13.254-96.718-20.53-29.336-6.645-58.582-13.661-87.54-21.72-12.09-3.367-24.12-6.914-36.027-10.832-9.652-3.175-19.226-6.566-28.543-10.539h-.004c-3.703-1.582-7.355-3.25-10.914-5.093-2.89-1.497-5.71-3.094-8.363-4.91-2.031-1.403-3.965-2.891-5.562-4.641-1.157-1.29-2.165-2.653-2.57-4.133a5.26 5.26 0 01-.22-1.809c.032-.59.188-1.187.438-1.75.277-.64.691-1.246 1.184-1.82.586-.691 1.293-1.313 2.054-1.895 2.051-1.57 4.45-2.75 6.934-3.804 3.488-1.477 7.137-2.621 10.84-3.633 5.945-1.625 11.93-3.145 17.914-4.684 9.937-2.554 19.883-5.082 29.828-7.613 26.148-6.652 52.3-13.285 78.437-19.984 25.122-6.438 50.239-12.903 75.293-19.625 8.649-2.32 17.297-4.66 25.903-7.16 2.73-.793 5.46-1.602 8.175-2.485a69.55 69.55 0 002.672-.914c.547-.2 1.114-.41 1.676-.695a5.673 5.673 0 001.457-.992c.328-.313.61-.73.742-1.246a2.293 2.293 0 00-.132-1.383 4.163 4.163 0 00-.868-1.254c-.992-1.031-2.195-1.766-3.367-2.41-1.726-.961-3.52-1.762-5.316-2.508-4.985-2.067-10.106-3.75-15.23-5.363-6.325-1.989-12.696-3.829-19.067-5.633-6.7-1.895-13.41-3.742-20.11-5.625-6.128-1.719-12.246-3.457-18.324-5.336a236.567 236.567 0 01-7.61-2.469c-2.054-.707-4.097-1.45-6.097-2.285-1.457-.606-2.894-1.246-4.222-2.055-.454-.277-.895-.57-1.278-.914-.273-.246-.52-.492-.656-.781a2.41 2.41 0 01-.266-1.055c-.003-.36.082-.726.235-1.07.39-.906 1.172-1.633 1.996-2.29 1.2-.94 2.55-1.69 3.933-2.378 1.82-.899 3.707-1.668 5.622-2.379 4.992-1.855 10.132-3.316 15.3-4.66 6.328-1.649 12.711-3.082 19.118-4.414 13.957-2.91 28.011-5.344 42.097-7.59a1670.268 1670.268 0 0134.64-5.125zm0 0"
        />
      </g>
      <g clipPath="url(#prefix__d)">
        <path
          transform="matrix(.51573 0 0 .51507 -49.642 213.23)"
          fill="none"
          d="M1061.402 525.29c-22.442 2.98-44.854 6.158-67.229 9.608-27.328 4.225-54.618 8.82-81.726 14.326-12.437 2.533-24.843 5.256-37.151 8.396-10.051 2.563-20.057 5.361-29.813 8.933-3.734 1.365-7.437 2.86-11.028 4.611-2.726 1.335-5.423 2.821-7.862 4.71-1.689 1.29-3.325 2.844-4.264 4.891a6.296 6.296 0 00-.576 2.594 6.1 6.1 0 00.637 2.601c.394.781.97 1.403 1.56 1.911.833.744 1.742 1.358 2.658 1.927 2.659 1.638 5.5 2.92 8.34 4.118 3.908 1.66 7.884 3.124 11.884 4.527 4.893 1.722 9.823 3.33 14.77 4.884 11.785 3.709 23.654 7.144 35.523 10.55 12.974 3.716 25.964 7.371 38.924 11.117 12.338 3.565 24.646 7.19 36.863 11.103 9.9 3.178 19.762 6.47 29.297 10.496 3.447 1.449 6.832 2.988 10.052 4.8 2.211 1.267 4.355 2.556 5.968 4.286.523.568.97 1.137 1.197 1.729.166.44.242.902.144 1.259-.076.424-.41.857-.81 1.274-.6.599-1.387 1.061-2.243 1.494-.931.47-1.946.842-3.007 1.228a149.257 149.257 0 01-5.105 1.722c-5.226 1.668-10.505 3.2-15.8 4.717-16.678 4.763-33.455 9.214-50.24 13.636-48.619 12.801-97.374 25.095-146.144 37.35-50.733 12.749-101.51 25.376-152.265 38.033a24849.111 24849.111 0 00-57.92 14.493c-11.62 2.927-23.253 5.824-34.857 8.934-7.301 1.956-14.595 4.216-21.662 7.159-5.022 2.078-10.036 4.542-14.558 7.932-1.689 1.267-3.317 2.708-4.772 4.376-1.212 1.388-2.295 2.973-3.098 4.755a14.992 14.992 0 00-1.295 5.127 15.52 15.52 0 00.584 5.24c1.189 3.974 3.506 7.311 6.074 10.08 3.492 3.83 7.514 7 11.626 9.836 5.37 3.716 11.013 6.954 16.724 9.95 7.03 3.693 14.225 7.03 21.473 10.162 18.24 7.895 36.917 14.63 55.694 20.916 23.154 7.759 46.536 14.789 70 21.455 56.21 15.972 112.955 29.91 169.838 43.107 62.32 14.454 124.869 27.908 187.507 40.846 59.466 12.27 119.03 24.048 178.646 35.546 47.718 9.199 95.466 18.193 143.206 27.203 16.671 3.147 33.335 6.294 49.983 9.518a2315.855 2315.855 0 0118.11 3.564c4.34.872 8.665 1.752 12.944 2.7l2.128-9.776c-4.385-.94-8.77-1.812-13.133-2.67a2563.729 2563.729 0 00-18.209-3.488c-16.686-3.147-33.387-6.203-50.073-9.267-47.786-8.775-95.564-17.527-143.297-26.483-59.647-11.186-119.234-22.66-178.722-34.628-62.661-12.604-125.217-25.732-187.538-39.86-56.882-12.9-113.59-26.521-169.738-42.167-23.442-6.537-46.771-13.423-69.857-21.03-18.716-6.165-37.28-12.748-55.345-20.461h-.008c-7.18-3.071-14.262-6.31-21.162-9.89-5.605-2.904-11.074-6.006-16.217-9.532-3.938-2.723-7.687-5.612-10.785-9.01-2.242-2.502-4.196-5.15-4.984-8.023-.34-1.168-.5-2.367-.424-3.512.06-1.145.363-2.305.848-3.397.538-1.244 1.34-2.42 2.295-3.534 1.136-1.343 2.507-2.549 3.984-3.679 3.977-3.048 8.627-5.339 13.444-7.386 6.764-2.867 13.838-5.089 21.019-7.053 11.528-3.155 23.132-6.105 34.735-9.093 19.27-4.96 38.553-9.867 57.837-14.781 50.702-12.915 101.412-25.793 152.09-38.8 48.71-12.497 97.413-25.049 145.994-38.1 16.77-4.505 33.539-9.048 50.225-13.902 5.294-1.539 10.589-3.109 15.853-4.823a134.736 134.736 0 005.18-1.774c1.06-.387 2.16-.797 3.25-1.35.97-.478 1.954-1.085 2.825-1.927a5.103 5.103 0 001.44-2.419 4.458 4.458 0 00-.258-2.685c-.425-.97-1.03-1.774-1.682-2.434-1.924-2.002-4.257-3.428-6.529-4.68-3.348-1.865-6.824-3.42-10.308-4.868-9.665-4.012-19.595-7.28-29.532-10.413-12.263-3.86-24.617-7.432-36.97-10.936-12.99-3.678-26.003-7.265-38.992-10.92-11.884-3.337-23.746-6.712-35.531-10.36-4.939-1.524-9.87-3.102-14.755-4.793-3.984-1.373-7.945-2.813-11.823-4.436-2.825-1.176-5.613-2.42-8.188-3.99-.878-.538-1.734-1.107-2.477-1.774-.53-.478-1.007-.956-1.272-1.517-.318-.644-.515-1.35-.515-2.048-.008-.697.159-1.41.454-2.077.758-1.76 2.273-3.17 3.87-4.445 2.326-1.827 4.947-3.283 7.628-4.618 3.53-1.744 7.188-3.238 10.9-4.619 9.68-3.602 19.647-6.438 29.668-9.047 12.27-3.2 24.646-5.984 37.068-8.57 27.063-5.65 54.315-10.375 81.627-14.735 22.352-3.565 44.749-6.856 67.169-9.95zm0 0"
          stroke="#FFF"
          strokeWidth={0.807}
        />
      </g>
      <path
        fill="#2C0D0A"
        d="M699.238 669.75l122.492 34.387M821.242 709.969a7.317 7.317 0 01-1.398-.254l-122.492-34.387c-3.512-.984-5.512-4.281-4.473-7.363 1.043-3.086 4.738-4.778 8.242-3.797l122.492 34.387c3.512.984 5.516 4.285 4.473 7.363-.902 2.676-3.8 4.309-6.844 4.05zm0 0M943.45 717.145c.09 1.562.109 3.125.058 4.687a53.273 53.273 0 01-.36 4.668 53.495 53.495 0 01-.773 4.598 51.188 51.188 0 01-2.758 8.824 49.543 49.543 0 01-1.957 4.14 47.077 47.077 0 01-4.98 7.54 45.428 45.428 0 01-2.973 3.324 44.26 44.26 0 01-3.258 2.984 42.593 42.593 0 01-7.246 4.836 40.232 40.232 0 01-7.976 3.18 39.543 39.543 0 01-16.918.973 40.442 40.442 0 01-8.29-2.25 41.754 41.754 0 01-3.96-1.782 42.196 42.196 0 01-3.79-2.195 44.036 44.036 0 01-3.578-2.594 45.804 45.804 0 01-6.39-6.265 48.132 48.132 0 01-5.164-7.504 49.596 49.596 0 01-2.063-4.13 51.34 51.34 0 01-2.98-8.804c-.364-1.52-.66-3.05-.89-4.598a52.122 52.122 0 01-.535-9.348c.05-1.562.17-3.12.358-4.667a53.24 53.24 0 01.774-4.598c.328-1.52.722-3.016 1.183-4.492a49.453 49.453 0 013.532-8.477 47.526 47.526 0 014.98-7.535 44.633 44.633 0 016.23-6.308 42.473 42.473 0 017.242-4.84 40.721 40.721 0 017.98-3.18 40.16 40.16 0 018.407-1.402 39.838 39.838 0 0112.704 1.336c1.386.375 2.754.824 4.097 1.347a40.758 40.758 0 013.961 1.778 43.198 43.198 0 017.367 4.793 44.899 44.899 0 013.332 2.96 46.28 46.28 0 013.055 3.305 47.044 47.044 0 012.75 3.614 47.22 47.22 0 012.418 3.89 49 49 0 012.063 4.129 51.634 51.634 0 011.687 4.324 51.981 51.981 0 012.184 9.074c.226 1.547.386 3.102.476 4.665zm0 0"
      />
      <path
        fill="#4F62B4"
        d="M640.496 555.242c-2.808 43.403-12.375 91.086-10.066 134.531l-31.844 5.946c0-.465-.086-.95-.176-1.387-12.11-56.574-16.879-114.844-14.113-172.73.453-9.54 1.11-19.11.496-28.637-.965-15.188-5.133-29.953-9.258-44.559-3.629-12.816-7.258-25.652-10.883-38.469-.336-1.199-.617-1.082.598-1.128.102 0 .191 0 .293-.012a28.324 28.324 0 01-1.535-1.715c-2.867 28.691-1.785 57.555-2.797 86.324-.996 28.219-8.59 55.328-15.195 82.645-10.211 42.203-19.325 87.36-24.504 130.527h-40.84c.074-.453.074-.937.058-1.39-2.207-57.903 3.102-116.13 15.739-172.583 2.094-9.304 4.375-18.597 5.414-28.093 1.652-15.117.086-30.41-1.465-45.555-1.11-10.68-2.207-21.379-3.305-32.074-6.992-43.024-5.793-87.36 3.496-129.926 3.598-16.508 8.426-32.91 8.778-49.797 27.02 6.598 56.023 11.149 82.547 19.504 10.37 3.266 20.23 9.98 24.03 20.152 11.102 29.68 12.356 61.172 14.462 92.414 2.035 30.23 5.68 60.325 9.867 90.32 3.984 28.575 2.059 57 .203 85.692zm0 0"
      />
      <path
        fill="#2C0D0A"
        d="M836.977 631.918l-23.786-199.36a4.965 4.965 0 00-.828-2.214l-76.277-112.031c-1.137-1.668-3.164-2.458-5.098-1.97L583.352 353.18a4.835 4.835 0 00-3.336 2.968 5.003 5.003 0 00.441 4.497l74.738 117.078 33.64 193.347a4.935 4.935 0 002.157 3.29 4.75 4.75 0 002.59.773c.414 0 .828-.055 1.238-.168l4.922-1.336a5.332 5.332 0 01-.375-1.207c-.523-2.852-.941-5.684-1.156-8.563l-.805.215-32.894-189.062a4.969 4.969 0 00-.711-1.825L592.246 361.09l137.817-34.387 73.707 108.258 23.136 193.902-77.078 20.957c.606.27 1.195.72 1.735 1.383 1.855 2.274 3.671 4.57 5.539 6.828l76.332-20.758c2.324-.632 3.836-2.918 3.543-5.355zm0 0"
      />
      <path
        fill="#F26E24"
        d="M641.68 61.637c.652-2.778.656-5.828-.688-8.344-1.203-2.25-3.351-3.848-5.605-5.043-5.106-2.71-10.953-3.7-16.719-4.137-31.406-2.367-61.895 10.52-89.7 25.32-4.417 2.352-8.991 4.926-11.706 9.133-3.703 5.73-2.856 13.985 1.93 18.848 2.609 2.652 6.105 4.254 9.632 5.445a56.683 56.683 0 0024.926 2.547c9.297-1.14 18.137-4.566 26.867-7.96 11.778-4.583 23.684-8.829 35.473-13.356 10.875-4.18 22.207-10.524 25.59-22.453zm0 0"
      />
      <path
        fill="#8C341C"
        d="M598.586 695.719c0 .558-.129 1.054-.512 1.437-.687.688-2.207-.34-1.535-1.054zm0 0M480.672 706.578c-.102.543-.309 1.024-.746 1.332-.805.543-2.121-.746-1.344-1.332zm0 0M689.922 284.352c-1.95-2.48-3.89-4.961-5.852-7.446-5.953-8.472-12.008-16.68-16.843-25.87-4.618-8.782-9.934-15.567-14.579-24.169-4.066-7.527-7.507-14.488-11.472-24.672 4.445-11.68 5.418-22.52 8.203-36.843-4.711-3.922-7.7-7.282-12.684-10.856-2.23-1.59-5.043-3.27-8-4.93-4.558-2.578-9.484-5.152-13.265-7.57.648.414-4.254 16.086-4.672 17.746a937.361 937.361 0 00-4.602 19.04c-1.015 4.405-2.136 8.741-2.953 13.081-4.355 23.075 7.582 42.367 21.031 59.848 8.676 11.242 17.48 22.441 27.184 32.812 3.687 3.918 7.469 7.72 11.273 11.508 2.645 2.649 5.329 5.293 8.008 7.946 5.992-6.93 12.684-13.207 19.223-19.625zm0 0"
      />
      <path
        fill="#2C0D0A"
        d="M610.41 70.832c.492 4.219-.543 8.547-2.883 11.922-2.406 3.492-6.015 5.855-9.652 7.969-2.496 1.465-5.074 2.843-7.914 3.484-2.852.621-5.852.469-8.762.781-1.543.176-3.082.5-4.488 1.121-1.047.457-2.074 1.637-3.145 1.918-2.043.528-4.058-3.414-5.062-4.972a37.954 37.954 0 01-5.516-14.106c-.043-.015-.082-.05-.11-.074-.5-.473-.698-2.168-.831-2.805-.766-3.82-.293-7.879 1.426-11.261 1.097-2.157 2.656-4.028 4.39-5.653 4.547-4.281 10.43-7.011 16.649-7.742.793-.086 1.629-.125 2.433-.05.024.007.04 0 .059.007 5.379-.172 11.445 2.082 15.601 5.172 4.778 3.555 7.102 8.457 7.805 14.289zm0 0"
      />
      <path
        fill="#8C341C"
        d="M601.55 123.234c.532 6.036 1.165 13.985-3.69 18.567-4.637 4.375-10.43 3.344-15.735.664-2.656-2.332-4.914-5.156-6.766-8.172a54.195 54.195 0 01-2.84-5.344l8.528-.226 19.207-13.024c1.125 1.086 1.203 6.485 1.297 7.535zm0 0M571.762 85.375c.164.137.238.332.261.543-.316-.094-.62-.152-.93-.215-.1-.312.415-.527.669-.328zm0 0"
      />
      <path
        fill="#8C341C"
        d="M569.055 119.613c1.414-2.71 2.082-5.726 2.613-8.722 1.379-7.649 1.297-14.723-.023-23.48.003-.122 1.878.058 1.847-.052 6.547 1.48 15.961 6.477 19.88 11.516-.028 6.488 2.448 12.59 6.96 16.762-.113-.035-.223-.075-.336-.11 1.375.418 4.406 8.34 4.512 9.457.531 6.043-1.059 15.082-5.91 19.668-3.125 2.946-7.82 4.516-11.852 2.953-.191-.082-1.023.204-1.219.106-1.07-1.274-3.843-1.414-5.011-2.61-2.121-2.19-4.325-5.867-6.86-7.57-4.937-3.304-9.547-8.328-15.511-8.195 4.582-2.238 8.57-5.254 10.91-9.723zm0 0"
      />
      <path
        fill="#8C341C"
        d="M595.027 58.36c-1.379-.41-2.785-.75-4.218-.86-6.66-.504-12.657 3.969-17.23 8.836-1.485 1.574-2.915 3.254-3.794 5.227-.883 1.976-2.156 4.035-1.3 6.023-1.231-1.367-3.485-1.664-5.028-.66-1.3.844-2 2.43-2.016 3.98-.015 1.551.575 3.055 1.403 4.367.945 1.5 2.273 2.832 3.957 3.383 1.683.555 3.765.156 4.844-1.246 1.878 4.88 4.433 9.59 8.187 13.223 3.754 3.633 8.828 6.101 14.05 5.949 5.223-.152 10.454-3.25 12.391-8.102 1.051-2.625 1.11-5.523 1.157-8.347l.406-24.352c-3.953-2.98-8.066-6.008-12.809-7.422zm0 0"
      />
      <path
        fill="#998831"
        d="M600.34 115.637l-.086.062a.565.565 0 00-.262-.176c.113.043.235.07.348.114zm0 0M605.082 117.152l-4.473-1.437a.987.987 0 00-.23-.39c.183.14.351.308.512.46 1.707.528 3.047.957 4.191 1.367zm0 0"
      />
      <path
        fill="#8C341C"
        d="M604.387 205.824a281.238 281.238 0 014.765-2.597 63.92 63.92 0 00-4.765 2.597zm0 0"
      />
      <path
        fill="#2C0D0A"
        d="M592.922 54.344c-6.863-1.004-13.98 1.437-19.375 5.8-2.66 2.145-5 4.829-6.125 8.06-1.121 3.226-1.016 8.444 2.082 9.886 5.113 2.375 10.219-.274 12.433-5.457.125-.297.262-.63.555-.77.293-.144.64-.047.957.047 8.32 2.508 18.403.18 24.387-6.129-2.191-6.582-8.05-10.437-14.914-11.437zm0 0M595.219 108.492c.18.496.281 1.04.629 1.438-2.04.398-4.067-.618-5.84-1.7-2.207-1.34-4.465-3.027-5.2-5.507 2.489 2.539 6.13 3.601 9.66 3.968.188.512.563 1.29.75 1.801zm0 0M600.082 85.77c-.148-.364-.453-.582-.863-.489-.336.078-.63.524-.489.864.145.347.29.69.403 1.05.05.157.094.317.129.477l.023.137c.016.086.016.09.008.02a2.813 2.813 0 01.004.68c.02-.165 0 .003-.008.038a3.457 3.457 0 01-.05.215c-.012.035-.098.254-.028.093-.031.067-.063.133-.098.196-.015.031-.152.219-.043.082a1.447 1.447 0 01-.144.164c-.274.277-.246.715.015.992.258.273.735.25.989-.016.543-.554.793-1.332.789-2.101-.004-.844-.317-1.633-.637-2.402zm0 0M598.992 96.262c.348-.149.598-.461.488-.864-.093-.332-.515-.636-.863-.488-1.8.766-3.699.063-5.426-.57-.359-.133-.765.156-.859.496-.102.39.145.727.5.86 1.941.71 4.137 1.425 6.16.566zm0 0M566.36 80.184c-.317-.23-.774-.024-.958.265a.728.728 0 00-.066.535c.055.196.176.305.332.422.062.047.062.047-.008-.004.031.024.063.043.094.067.058.047.117.094.176.144a10.448 10.448 0 01.984.902c.207.215.395.438.586.665.047.062.047.058-.008-.008.024.027.047.058.07.09.047.058.09.117.137.18.09.124.176.246.258.374.219.325.613.43.965.243.32-.176.445-.66.238-.965a11.666 11.666 0 00-2.8-2.91zm0 0M605.3 78.195c.372.121.747-.152.856-.496.117-.375-.152-.746-.5-.86a6.395 6.395 0 00-3.703-.046c-.379.11-.574.488-.488.863.082.367.508.59.863.489.14-.04.285-.079.43-.106l.164-.035c.035-.004.277-.055.09-.016.254-.05.543-.047.8-.043.141 0 .278.008.418.02.055.004.114.008.165.02-.172-.04.062.007.097.015.274.043.543.113.809.195zm0 0M593.93 78.7c.39-.028.68-.305.699-.704.016-.363-.336-.723-.703-.7l-3.012.188c-.394.024-.684.301-.703.704-.016.359.336.722.703.699l3.016-.188zm0 0M603.418 82.371c-1.14.059-1.262 1.692-.996 2.496.148.453.476.914.95.942.28.015.554-.137.737-.352.184-.215.286-.488.352-.766.184-.785.137-2.382-1.043-2.32zm0 0M592.766 82.352c-1.137.062-1.258 1.695-.993 2.5.149.449.477.914.95.941.28.016.554-.137.738-.352.184-.218.285-.492.351-.765.184-.785.137-2.383-1.046-2.324zm0 0"
      />
      <path
        fill="#998831"
        d="M631.129 190.797c-.137-.117.867-.598.937-.621 1.934-.613 4.016-.692 5.993-1.133 1.632-.367 3.254-.758 4.879-1.145.804-.191 9.656-2.238 9.675-2.132-.172-.903-.34-1.7-.379-2.043-.234-2.118-.457-4.235-.726-6.348a.344.344 0 00-.008-.066c-3.027-23.848-12.57-48.004-37.113-56.606a68.433 68.433 0 01-2.578-.957c-.598-.23-1.149-.441-1.692-.656-1.59-.64-2.996-1.227-5.035-1.938l-4.473-1.437c-.09-.028-.18-.055-.27-.078l-.085.062c1.125 1.086 1.203 6.485 1.297 7.535.531 6.036 1.164 13.985-3.692 18.567-5.484 5.172-14.035 2.996-18.656-2.188-2.762-3.105-5.16-6.152-6.91-9.89a99.083 99.083 0 01-1.762-4.125c-.5-1.25-1.285-2.953-1.957-5.012-.105-.023-.21-.04-.312-.063-.278-.058-.547-.132-.82-.207-.063-.011-.122-.023-.184-.03-.02.003-.04.003-.059.01-1.687-.042-4.011-.288-4.414-.308-2.168-.125-4.273-.027-6.437.164-8.18.746-15.852 3.114-22.434 8.102-6.418 4.871-11.559 11.305-15.805 18.094-6.91 11.043-10.718 23.726-14.039 36.336 4.637.609 7.86 7.359 12.461 8.171-6.144 25.247-7.836 44.43-6.164 70.02.715 10.91-.14 11.46-.14 21.473 25.53-2.176 53.734-2.739 77.906-10.45 6.86-2.199 15.808-5.433 22.652-7.304-1.586-17.563-.418-30.453 7.246-43.813.23-.402.477-.777.723-1.156 2.883-4.543 6.773-8.46 9.187-13.262 2.371-4.73 3.13-10.148 2.887-15.816.004.05.254.21.3.25zm0 0"
      />
      <path
        fill="#F26E24"
        d="M611.84 58.645a115.364 115.364 0 00-27.246 5.19 115.74 115.74 0 00-12.778 4.923c-4.34 1.972-9 4.465-13.02 6.965-.366-1.871-.253-3.594-.015-5.485.52-4.168 1.887-8.363 4.715-11.465 2.375-2.605 5.606-4.257 8.863-5.605 6.082-2.52 12.594-4.168 19.18-4.137 2.438.008 4.91.258 7.172 1.176 3.832 1.55 6.648 4.832 9.309 7.996"
      />
      <path
        fill="#F26E24"
        d="M550.305 63.941c3.824-9.894 12.418-17.816 22.586-20.816 10.172-3.004 21.687-1.016 30.265 5.219"
      />
      <path
        fill="#4F62B4"
        d="M632.555 178.285c-.09-.754-.172-1.512-.258-2.265-.027-.614-.05-1.23-.074-1.844h-.137c-1.04-9.137-1.926-18.332-3.45-27.383-1.683-10.02-7.284-18.824-11.964-27.672-1.32-2.5-5.11-.281-3.79 2.215 4.513 8.535 9.9 16.965 11.524 26.621 1.457 8.664 2.301 17.473 3.293 26.219h-54.492a72.741 72.741 0 00-1.738-13.774c.008-.168 0-.34-.028-.523-2.312-14.063-7.23-27.613-14.421-39.914-1.426-2.438-5.22-.23-3.79 2.215 6.957 11.902 11.641 24.937 13.915 38.535a2.5 2.5 0 00.05.648 66.955 66.955 0 011.625 12.813h-.058c-.422 7.488-2.7 14.754-5.48 21.719-3.368 8.43-8.016 17.097-16.122 21.183-6.894-1.48-12.625 5.59-17.504 10.684-4.82 5.031-9.644 10.066-14.465 15.101-1.629 1.7-3.296 3.461-4.156 5.653-.625 1.593-.785 3.324-.937 5.03l-1.946 21.583c-.367 4.094-.734 8.242-.039 12.293.696 4.05 2.594 8.058 5.938 10.445 3.812 2.723 8.847 2.953 13.515 2.567 4.551-.38 9.18-1.29 13.051-3.711 7.098-4.434 13.45-28.864 13.817-20.5 1.648 37.496 11.316 32.906 15.714 15.203 16.297-1.356 19.696 13.695 36.036 13.035-4.352-8.707 6.945-70.91 11.355-79.582 4.414-8.676 10.477-16.629 13.16-25.98 1.809-6.313 1.918-12.954 1.715-19.56.129-.292.191-.636.14-1.054zm0 0"
      />
      <path
        fill="#2C0D0A"
        d="M595.18 44.285c-11.23 2.16-22.567 4.352-33.211 8.653a80.036 80.036 0 00-8.606 4.058c-.828.453-.09 1.719.739 1.262 9.918-5.438 20.921-8.367 31.93-10.672 3.171-.66 6.35-1.277 9.534-1.89.926-.176.532-1.587-.386-1.41zm0 0"
      />
      <path
        fill="#4F62B4"
        d="M631.43 173.426c4.832 57.922-13.028 116.176-6.446 173.926-15.968-22.04-26.668-46.418-29.375-73.497-.687-6.89-.914-13.851-.101-20.726 1.68-14.18 11.652-20.129 18.12-32.856 6.767-13.308 10.454-33.855 17.802-46.847zm0 0"
      />
      <path
        fill="#8C341C"
        d="M595.621 320.895c-.598-.649-1.187-1.293-1.8-1.875-3.298-3.555-6.598-7.11-9.915-10.665-6.636-7.953-13.351-15.628-18.93-24.39-5.328-8.367-10.148-17.317-15.492-25.5-4.675-7.168-8.636-14.723-14.507-21.012 3.46-12.012 6.152-23.11 7.746-37.613-5.02-3.524-10.899-6.406-16.16-9.555-2.356-1.398-5.297-2.84-8.38-4.246-4.761-2.195-9.878-4.355-13.847-6.45.68.36-2.91 16.384-3.188 18.075a952.457 952.457 0 00-3.011 19.352c-.649 4.476-1.407 8.89-1.864 13.285-2.425 23.355 11.063 41.594 25.914 57.898 9.575 10.488 19.278 20.918 29.805 30.453 4 3.598 8.082 7.07 12.188 10.532 4.648 3.937 9.386 7.855 14.05 11.843 5.325-7.285 11.008-14.37 17.391-20.132zm0 0"
      />
      <path
        fill="#8C341C"
        d="M628.777 339.18c4.535 1.425 9.547 1.277 13.996-.368 1.282-.464 1.938-1.964 1.254-3.128-.59-1.012-1.57-1.836-2.62-2.352-1.84-.855-3.915-1.062-5.845-1.637-4.597-1.418-8.285-5-12.89-6.379-5.336-1.605-11.031-.039-16.594.11-2.277.074-4.644-.145-6.64-1.242-1.477-.805-2.665-2.051-3.817-3.29-6.383 5.762-12.066 12.848-17.39 20.133 3.492 2.989 6.949 6.012 10.277 9.133 6.058 5.695 12.96 10.375 20.445 13.992 1.402.66 2.887 1.313 4.422 1.305 1.559 0 3.223-.832 3.695-2.309 2.871.72 5.88.754 8.762.157 1.148-.254 2.73-.743 2.969-2.102.183-1.05-.551-1.793-1.547-1.965 2.383.356 5.027.66 7.031-.664 2.028-1.32 2.438-5.012.184-5.879 3.117 1.434 9.074-1.074 8.586-5.14-.356-2.82-5.047-3.368-7.125-4.223-3.325-1.371-6.676-2.727-10-4.098 1.187-.03 1.726-.41 2.847-.054zm0 0"
      />
      <path
        fill="#2C0D0A"
        d="M626.203 351.418a41.186 41.186 0 007.875 2.02c1.274.19 1.617-1.778.348-1.97a38.564 38.564 0 01-7.367-1.859c-.512-.183-1.082-.05-1.332.477-.215.457-.032 1.148.476 1.332zm0 0M620.676 357.336c1.808.812 3.636 1.57 5.488 2.277.527.2 1.063.035 1.332-.476.238-.45.016-1.145-.476-1.332a106.693 106.693 0 01-5.489-2.274c-.511-.23-1.074-.011-1.332.473-.25.473-.004 1.121.477 1.332zm0 0M613.574 361.531c.946.516 1.89 1.028 2.84 1.54.492.265 1.086-.02 1.328-.477.262-.496-.015-1.082-.472-1.332-.95-.512-1.895-1.024-2.84-1.535-.492-.27-1.09.015-1.332.472-.262.496.015 1.086.476 1.332zm0 0"
      />
      <path
        fill="#8C341C"
        d="M682.883 334.293c.992 4.656.375 9.633-1.68 13.906-.586 1.235-2.14 1.746-3.234.957-.953-.683-1.676-1.738-2.094-2.836-.68-1.91-.688-3.996-1.078-5.968-.977-4.715-4.195-8.727-5.137-13.442-1.094-5.465 1-10.988 1.672-16.515.29-2.262.293-4.637-.613-6.73-.66-1.548-1.79-2.849-2.914-4.11 6.336-5.813 13.922-10.809 21.675-15.426 2.645 3.758 5.325 7.488 8.122 11.094 5.097 6.566 9.101 13.886 12 21.68.523 1.46 1.035 2.995.882 4.527-.148 1.55-1.132 3.129-2.644 3.46.445 2.926.195 5.926-.672 8.743-.36 1.117-.996 2.648-2.371 2.758-1.063.086-1.73-.72-1.809-1.727.133 2.406.188 5.07-1.32 6.941-1.504 1.895-5.219 1.954-5.871-.37 1.133 3.242-1.918 8.937-5.922 8.066-2.773-.617-2.875-5.344-3.535-7.492-1.05-3.442-2.082-6.903-3.137-10.344-.14 1.18-.566 1.68-.32 2.828zm0 0"
      />
      <path
        fill="#2C0D0A"
        d="M694.023 332.281c-.546.2-.734.758-.597 1.281a38.776 38.776 0 011.156 7.512c.07 1.285 2.063 1.13 1.992-.156a41.137 41.137 0 00-1.27-8.035c-.132-.524-.804-.77-1.28-.602zm0 0M700.438 327.336c-.512.21-.782.75-.602 1.281.637 1.875 1.223 3.77 1.75 5.68.14.508.809.797 1.281.601.531-.222.746-.742.598-1.28a103.678 103.678 0 00-1.75-5.684c-.168-.497-.79-.801-1.278-.598zm0 0M705.277 320.656c-.476.2-.816.77-.597 1.281.422.993.843 1.985 1.265 2.973.203.48.762.813 1.278.598.48-.195.82-.766.601-1.281l-1.265-2.97c-.204-.48-.762-.812-1.282-.6zm0 0"
      />
      <path
        fill="#F26E24"
        d="M670.887 565.953l12.043 71.168 154.554 89.961L981 677.309s17.426-43.727 1.578-88.395l-156.742-72.672zm0 0M908.844 722.992c.058 1.028.043 2.051-.051 3.067a19.718 19.718 0 01-.492 2.976 18.066 18.066 0 01-.914 2.766c-.375.879-.813 1.699-1.309 2.457a13.571 13.571 0 01-1.644 2.047 11.08 11.08 0 01-1.926 1.558 9.377 9.377 0 01-2.125 1.016 8.725 8.725 0 01-2.246.433 8.819 8.819 0 01-2.282-.171 9.701 9.701 0 01-2.226-.766 11.065 11.065 0 01-2.086-1.332 13.047 13.047 0 01-1.871-1.848 15.398 15.398 0 01-1.578-2.289 17.588 17.588 0 01-1.227-2.644 19.295 19.295 0 01-.828-2.899 21.133 21.133 0 01-.352-6.11c.09-1.015.254-2.007.493-2.972.238-.965.543-1.89.918-2.77a15.74 15.74 0 011.304-2.452c.5-.758 1.047-1.442 1.649-2.047a11.046 11.046 0 011.922-1.563 9.537 9.537 0 012.125-1.015 8.75 8.75 0 012.246-.43 8.638 8.638 0 012.281.172c.758.156 1.5.41 2.227.765a11.02 11.02 0 012.09 1.332c.663.536 1.288 1.149 1.87 1.844.579.696 1.106 1.461 1.579 2.29.472.831.879 1.714 1.226 2.644a20.734 20.734 0 011.227 5.941zm0 0"
      />
      <path
        fill="#2C0D0A"
        d="M974.023 594.426l-141.707 40.617-147.992-65.441 141.52-47.59zm0 0"
        fillOpacity={0.31}
      />
      <g clipPath="url(#prefix__e)">
        <path
          fill="#2C0D0A"
          d="M578.129 760.29c.488-4.497-.828-9.157-3.652-12.915-8.012-10.66-24.766-11.668-36.586-18.836-8.625-5.226-14.516-14.043-15.61-23.363-.996-8.477 2.942-25.156 4.965-33.45 7.356-30.152 9.945-49.32 17.238-77.617l-65.601-4.136c-9.028 52.207-10.406 112.308-18.477 164.652zm0 0"
        />
      </g>
      <path
        fill="#2C0D0A"
        d="M526.902 415.504c-2.285-18.613-5.027-37.192-6.3-55.914-1.247-18.402-1.036-37.027 2.652-55.16a148.75 148.75 0 011.574-6.887c.23-.914-1.18-1.3-1.41-.387-4.496 17.82-5.508 36.262-4.719 54.57.809 18.712 3.38 37.29 5.746 55.852 2.387 18.711 4.551 37.477 4.688 56.363.144 19.5-1.547 38.977-4.2 58.286-2.632 19.171-6.195 38.199-9.863 57.191l-1.406 7.254c-.18.918 1.23 1.312 1.41.387 3.703-19.082 7.403-38.176 10.262-57.407 2.836-19.043 4.863-38.234 5.215-57.496.347-18.976-1.336-37.832-3.649-56.652zm0 0M598.02 592.387h-16.286c-5.73 52.672-3.328 112.738-8.093 165.488l117.847-1.75c.203-4.52-1.402-9.086-4.457-12.656-8.668-10.137-25.449-10.094-37.699-16.5-8.937-4.672-15.371-13.102-17.047-22.336-1.527-8.399 1.356-25.29 2.856-33.696 5.445-30.554 6.828-49.851 12.324-78.55h-47.98c1.964-15.692 2.937-31.492 3.144-47.305.215-16.32-.363-32.644-1.426-48.93-.984-15.113-2.21-30.254-4.094-45.285-1.656-13.242-3.968-26.465-8.004-39.207-3.925-12.398-9.539-24.316-17.558-34.613a93.644 93.644 0 00-3.027-3.668c.57-6.66 1.226-13.317 2.046-19.953a527.3 527.3 0 012.051-14.817c.14-.918-1.27-1.316-1.414-.386a537.968 537.968 0 00-5.383 52.394c-.265 4.985-.46 9.973-.586 14.961-.023.942 1.438.942 1.461 0 .258-10.055.828-20.098 1.645-30.121 8.12 9.684 14.015 21.012 18.14 32.926 4.329 12.488 6.872 25.527 8.66 38.601 2.005 14.653 3.215 29.442 4.262 44.192 1.141 16.066 1.844 32.172 1.809 48.281-.04 16.148-.816 32.305-2.633 48.356-.176 1.527-.367 3.05-.558 4.574zm0 0M555.793 165.395c-3.93 11.25-7.973 22.46-12.129 33.628-.328.883 1.086 1.266 1.41.391 4.156-11.168 8.2-22.379 12.13-33.633.308-.89-1.102-1.273-1.411-.386zm0 0"
      />
      <path
        fill="#998831"
        d="M821.664 554.895c5.133-7.114 11.969-12.903 16.84-20.2 4.547-6.812 7.215-14.68 10.96-21.96 3.743-7.286 8.997-14.337 16.595-17.395-2.317 19.172 13.882 38.715 6.597 56.598-3.125 7.671-10.18 13.382-12.61 21.304-1.968 6.418-.628 13.477-2.429 19.946-4.387 15.73-29.137 30.332-39.398 14.359-9.883-15.395-6.852-38.375 3.445-52.652zm0 0"
      />
      <path
        fill="#998831"
        d="M873.82 571.715c15.528-12.707 39.051-8.86 56.758-18.285-6.265 9.754-8.226 21.55-11.86 32.558-3.628 11.008-9.976 22.297-20.827 26.36-8.555 3.203-18.575 1.355-26.696 5.535-9.644 4.96-14.687 16.722-26.746 16.355-10.422-.316-19.312-9.472-19.816-19.64-.48-9.762 5.808-17.188 13.969-21.496 6.144-3.239 13.488-3.454 19.539-7.082 6.18-3.707 10.172-9.793 15.68-14.305zm0 0"
      />
      <path
        fill="#998831"
        d="M825.871 607.824c1.113-6.945 5.8-14.031 2.93-20.457-1.813-4.054-6.117-6.316-9.094-9.613-5.09-5.637-5.937-13.774-7.144-21.27-1.211-7.5-3.602-15.73-10.192-19.5-7.176-4.101-16.34-1.16-23.39 3.153-6.95 4.25-13.422 10.25-15.446 18.144-1.058 4.13-.816 8.461-.562 12.715.086 1.39.18 2.824.785 4.082 1.43 2.969 5.074 3.973 7.699 5.957 8.277 6.27 4.563 19.899 9.844 28.84 5.222 8.84 17.105 10.309 26.246 14.973 2.726 1.394 5.305 3.14 8.238 4.023 5.254 1.586 11.848.965 15.594-2.7-3.547-5.456-6.594-11.562-5.508-18.347zm0 0"
      />
      <path
        fill="#2C0D0A"
        d="M862.398 499.559c-7.703 15.203-8.867 32.464-12.859 48.785-2.207 9.027-5.543 17.71-8.3 26.574-2.77 8.894-4.829 17.992-6.493 27.156-1.441 7.957-2.594 15.961-3.676 23.973-.582-2.324-1.554-4.613-2.28-6.863-.817-2.54-1.173-5.063-.852-7.723.312-2.57 1.027-5.066 1.617-7.582.578-2.45 1.054-4.969.933-7.496-.101-2.078-.64-4.117-1.484-6.012-1.707-3.84-4.43-7.09-6.942-10.418-2.753-3.648-5.468-7.617-5.742-12.328-.05-.941-1.511-.86-1.457.082.477 8.383 7.586 14.074 11.574 20.867 1.012 1.719 1.836 3.555 2.274 5.508.55 2.45.34 4.965-.133 7.41-.941 4.863-2.871 9.742-2.027 14.77.472 2.816 1.613 5.441 2.523 8.133.89 2.648 1.594 5.523.567 8.242-.196.515.18.949.586 1.047.316.511 1.222.562 1.32-.176.18-1.34.36-2.684.535-4.024.371-.011.758-.238.777-.714.239-6.055 4.559-10.875 7.86-15.59 1.68-2.399 3.261-4.887 4.242-7.664 1.238-3.489 1.406-7.262 3.527-10.41 2.2-3.258 5.555-5.54 8.754-7.72.778-.53-.031-1.75-.808-1.218-2.903 1.977-5.871 4.027-8.125 6.758-1.086 1.312-1.993 2.773-2.594 4.367-.703 1.852-1.047 3.797-1.528 5.71-1.585 6.333-6.246 10.99-9.585 16.407-.575.93-1.09 1.89-1.54 2.875 2.028-14.61 4.407-29.187 8.5-43.37 2.598-9.005 6.032-17.747 8.508-26.786 2.242-8.18 3.586-16.559 5.235-24.867 1.84-9.282 4.097-18.555 8.394-27.035.426-.844-.875-1.508-1.3-.668zm0 0"
      />
      <path
        fill="#2C0D0A"
        d="M913.105 569.695c-5.714 3.172-11.457 6.367-16.668 10.344-2.53 1.934-4.933 4.047-7.101 6.387-2.215 2.386-4.211 4.976-6.547 7.258-4.746 4.636-10.973 7.136-16.883 9.914-5.617 2.636-11.16 5.465-16.39 8.816-5.864 3.75-11.313 8.191-15.774 13.559-.601.726.488 1.699 1.094.976 8.059-9.703 19.187-16.094 30.43-21.441 5.66-2.692 11.687-5.004 16.578-9.024 2.492-2.043 4.562-4.504 6.668-6.93 2.156-2.488 4.441-4.827 6.992-6.917 5.644-4.63 12.055-8.192 18.414-11.723.82-.457.008-1.672-.813-1.219zm0 0M815.508 610.656c-9.645-15.152-17.957-31.14-28.309-45.843-2.914-4.137-5.992-8.165-9.277-12.016-.606-.707-1.832.094-1.219.808 11.676 13.688 20.5 29.438 29.64 44.852 2.59 4.371 5.216 8.723 7.946 13.008.504.797 1.723-.012 1.219-.809zm0 0"
      />
      </>
  );
}

export { WelcomeFarmer, WelcomeFarmerModal, WelcomeFarmerSidebar };
