const spacing = document.querySelector('#spacing');
const blur = document.querySelector('#blur');
const baseColor = document.querySelector('#base-color');
const image = document.querySelector('figure');

function handleChange(e) {
  const unit = e.target.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${e.target.id}`, e.target.value + unit);
}

spacing.addEventListener('change', handleChange);
blur.addEventListener('change', handleChange);
baseColor.addEventListener('change', handleChange);

spacing.addEventListener('mousemove', handleChange);
blur.addEventListener('mousemove', handleChange);
baseColor.addEventListener('input', handleChange);