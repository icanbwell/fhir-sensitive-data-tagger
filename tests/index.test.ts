import { tagSensitiveResource } from '../src/index';

describe('tagSensitiveResource', () => {
  it('should be a function', () => {
    expect(typeof tagSensitiveResource).toBe('function');
  });

  it('should not throw with empty inputs', () => {
    expect(() => {
      tagSensitiveResource({
        resource: { resourceType: 'Patient' },
        sensitiveDataTags: [],
      });
    }).not.toThrow();
  });
});
