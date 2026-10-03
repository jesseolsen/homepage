import React from 'react';
import ReactDOM from 'react-dom';
import Resume from '../Components/Resume';

const resumeData = require('../../public/resumeData.json');

describe('RegScale work entry', () => {
  const work = resumeData.resume.work;
  const regscale = work.find((job) => job.company.startsWith('RegScale'));

  it('is listed first in the Work section as the current role', () => {
    expect(regscale).toBeDefined();
    expect(work[0]).toBe(regscale);
    expect(regscale.title).toBe('Principal Software Engineer - AI');
    expect(regscale.years).toBe('2026 - Present');
    expect(regscale.description).toMatch(
      /Continuous Controls Monitoring \(CCM\)/
    );
    expect(regscale.description).toMatch(
      /AI enhanced features in the RegScale product/
    );
  });

  it('renders above Booz Allen Hamilton in the Resume component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Resume data={resumeData.resume} />, div);
    const companies = Array.from(div.querySelectorAll('.work h3')).map(
      (h3) => h3.textContent
    );
    expect(companies[0]).toMatch(/^RegScale/);
    expect(companies[1]).toMatch(/^Booz Allen Hamilton/);
    expect(div.textContent).toContain('Principal Software Engineer - AI');
    ReactDOM.unmountComponentAtNode(div);
  });
});
