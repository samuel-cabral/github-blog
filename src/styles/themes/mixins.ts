import { css } from 'styled-components'

export const mixins = {
  fonts: {
    titleL: css`
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 1.6;
    `,
    titleM: css`
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 1.6;
    `,
    titleS: css`
      font-size: 1.125rem;
      font-weight: 700;
      line-height: 1.6;
    `,
    subtitle: css`
      font-size: 1rem;
      font-weight: 600;
      line-height: 1.6;
    `,
    text: css`
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.6;
    `,
    span: css`
      font-size: 0.75rem;
      font-weight: 400;
      line-height: 1.6;
    `,
    label: css`
      font-size: 0.625rem;
      font-weight: 400;
      line-height: 1.6;
    `,
  },
}
