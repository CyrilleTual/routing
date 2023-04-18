import React from 'react';

function ArticlesSolutions({item}) {

    return (
        <React.Fragment>
              <h3>{item.title}</h3>
            <p>
                {item.text}
            </p>

        </React.Fragment>
    )
}
export default ArticlesSolutions;
