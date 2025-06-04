import matplotlib.pyplot as plt
import networkx as nx

# Initialize graph
G = nx.DiGraph()

# Entities
entities = {
    "Users": "#FFD1DC",
    "Buyers": "#D1E8FF",
    "Suppliers": "#D1FFD1",
    "Admins": "#E0C1FF",
    "Products": "#FFFACD",
    "Orders": "#FFDEAD",
    "Categories": "#C1FFFF",
    "Product Approvals": "#E6E6FA",
    "Supplier Performance": "#FFE4E1",
    "Returns": "#F5DEB3",
    "Notifications": "#F0FFF0",
    "Messages": "#F5F5DC",
    "Admin Logs": "#FAFAD2",
    "User Sessions": "#F0FFFF"
}

# Add nodes with custom color
for node, color in entities.items():
    G.add_node(node, style='filled', fillcolor=color)

# Define relationships
relations = [
    ("Users", "Buyers"),
    ("Users", "Suppliers"),
    ("Users", "Admins"),
    ("Users", "User Sessions"),
    ("Users", "Notifications"),
    ("Users", "Messages"),
    ("Suppliers", "Products"),
    ("Suppliers", "Orders"),
    ("Suppliers", "Supplier Performance"),
    ("Buyers", "Orders"),
    ("Buyers", "Returns"),
    ("Admins", "Product Approvals"),
    ("Admins", "Admin Logs"),
    ("Products", "Product Approvals"),
    ("Products", "Categories"),
    ("Products", "Orders"),
    ("Orders", "Returns")
]

# Add edges
for src, tgt in relations:
    G.add_edge(src, tgt)

# Plotting
plt.figure(figsize=(18, 12))
pos = nx.spring_layout(G, seed=1)

# Node colors
colors = [entities[node] for node in G.nodes()]

nx.draw_networkx_nodes(G, pos, node_color=colors, node_size=4000, edgecolors='black')
nx.draw_networkx_labels(G, pos, font_size=10, font_weight="bold")
nx.draw_networkx_edges(G, pos, arrows=True, arrowstyle='-|>', edge_color='gray', width=1.5)

plt.title("Full EER Diagram: Users, Buyers, Suppliers, Admins, Products, Orders, and More", fontsize=16)
plt.axis("off")
plt.tight_layout()
plt.show()
