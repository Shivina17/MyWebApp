import sklearn
sklearn.__version__

print(__doc__)

import plotly.plotly as py

import plotly
plotly.tools.set_credentials_file(username='shivina17', api_key='gLzhbQAle0otJWU7rWX9')
import plotly.graph_objs as go

import numpy as np
import matplotlib.pyplot as plt

from sklearn import decomposition
from sklearn import datasets


np.random.seed(5)

centers = [[1, 1], [-1, -1], [1, -1]]
iris = datasets.load_iris()
X = iris.data
y = iris.target

pca = decomposition.PCA(n_components=3)
pca.fit(X)
X = pca.transform(X)

def matplotlib_to_plotly(cmap, pl_entries):
    h = 1.0/(pl_entries-1)
    pl_colorscale = []

    for k in range(pl_entries):
        C = map(np.uint8, np.array(cmap(k*h)[:3])*255)
        pl_colorscale.append([k*h, 'rgb'+str((C[0], C[1], C[2]))])

    return pl_colorscale

# Reorder the labels to have colors matching the cluster results
y = np.choose(y, [1, 2, 0]).astype(np.float)

trace = go.Scatter3d(x=X[:, 0], y=X[:, 1], z=X[:, 2],
                     mode='markers',
                     marker=dict(color=y,
                                 colorscale=matplotlib_to_plotly(plt.cm.spectral, 5),
                                 line=dict(color='black', width=1))
                     )

layout = go.Layout(scene=
                   dict(
                        xaxis=dict(ticks='', showticklabels=False),
                        yaxis=dict(ticks='', showticklabels=False),
                        zaxis=dict(ticks='', showticklabels=False),
                       )
                  )

fig = go.Figure(data=[trace], layout=layout)

plotly.offline.plot(fig, image='png')
