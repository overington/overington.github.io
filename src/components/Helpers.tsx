export function SampleTextColors() {
  const nums = [
    0,
    3,
    5,
    7,
    10,
    20,
    30,
    40,
    50,
    60,
    70,
    80,
    90,
    'dark',
    'light',
    null
  ]
  return (
    <div>
      {nums.map((n, i) => {
        const color_string = n === null ? '' : '-' + n
        return (
          <p style={{ color: 'var(--text-color' + color_string + ')' }} key={i}>
            text{color_string}
          </p>
        )
      })}
    </div>
  )
}