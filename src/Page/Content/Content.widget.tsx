import React from 'react';
import { useLocation } from 'react-router-dom';
import { PageLinks } from '../../Data';

export const Content: React.FC = () => {
  const location = useLocation();
  const { id } = PageLinks[location.pathname] || {};
  switch (id) {
    case 1:
      return (
        <div>
          <div>
            <h2>What is Lorem Ipsum?</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          <div>
            <h2>Where does it come from?</h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
              piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
              McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going
              through the cites of the word in classical literature, discovered the undoubtable
              source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good
              and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of
              ethics, very popular during the Renaissance. The first line of Lorem Ipsum , comes
              from a line in section 1.10.32.
            </p>
          </div>
          <div>
            <h2>Why do we use it?</h2>
            <p>
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using making it look like
              readable English. Many desktop publishing packages and web page editors now use Lorem
              Ipsum as their default model text, and a search for lorem ipsum will uncover many web
              sites still in their infancy. Various versions have evolved over the years, sometimes
              by accident, sometimes on purpose (injected humour and the like).
            </p>
          </div>
          <div>
            <h2>Why do we use it?</h2>
            <p>
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using Content here, content
              here, making it look like readable English. Many desktop publishing packages and web
              page editors now use Lorem Ipsum as their default model text, and a search for lorem
              ipsum will uncover many web sites still in their infancy. Various versions have
              evolved over the years, sometimes by accident, sometimes on purpose (injected humour
              and the like). this is no CSS
            </p>
          </div>
        </div>
      );
    case 2:
      return (
        <table>
          <tbody>
            <tr>
              <td>
                <div>
                  <h2>What is Lorem Ipsum?</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                  </p>
                </div>
              </td>
              <td>
                <h2>Where does it come from?</h2>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in
                  a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                  Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum
                  passage, and going through the cites of the word in classical literature,
                  discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
                  1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book
                  is a treatise on the theory of ethics, very popular during the Renaissance. The
                  first line of Lorem Ipsum , comes from a line in section 1.10.32.
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <h2>Why do we use it?</h2>
                <p>
                  It is a long established fact that a reader will be distracted by the readable
                  content of a page when looking at its layout. The point of using Lorem Ipsum is
                  that it has a more-or-less normal distribution of letters, as opposed to using
                  making it look like readable English. Many desktop publishing packages and web
                  page editors now use Lorem Ipsum as their default model text, and a search for
                  lorem ipsum will uncover many web sites still in their infancy. Various versions
                  have evolved over the years, sometimes by accident, sometimes on purpose (injected
                  humour and the like).
                </p>
              </td>
              <td>
                <h2>Why do we use it?</h2>
                <p>
                  It is a long established fact that a reader will be distracted by the readable
                  content of a page when looking at its layout. The point of using Lorem Ipsum is
                  that it has a more-or-less normal distribution of letters, as opposed to using
                  Content here, content here, making it look like readable English. Many desktop
                  publishing packages and web page editors now use Lorem Ipsum as their default
                  model text, and a search for lorem ipsum will uncover many web sites still in
                  their infancy. Various versions have evolved over the years, sometimes by
                  accident, sometimes on purpose (injected humour and the like). this is no CSS
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      );
    default:
      return null;
  }
};
