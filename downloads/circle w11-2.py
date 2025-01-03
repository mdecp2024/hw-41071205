from browser import html
from browser import document as doc

# 建立畫布
canvas = html.CANVAS(width=400, height=400)
brython_div = doc["brython_div1"]
brython_div <= canvas

# 每一格的 pixel 數
gs = 20

ctx = canvas.getContext("2d")

def draw_pixel(x, y, color="black"):
    """畫一個小方格，表示點陣的單一像素"""
    ctx.fillStyle = color
    ctx.fillRect(x * gs, y * gs, gs, gs)

def draw_circle_filled(cx, cy, radius, color="blue"):
    """繪製內部填滿的點陣圓形"""
    x = 0
    y = radius
    d = 1 - radius  # 決策變數初始化

    while x <= y:
        # 填滿圓的一段橫線
        for i in range(cx - x, cx + x + 1):
            draw_pixel(i, cy + y, color)
            draw_pixel(i, cy - y, color)
        for i in range(cx - y, cx + y + 1):
            draw_pixel(i, cy + x, color)
            draw_pixel(i, cy - x, color)

        # 中點演算法的決策
        if d < 0:  # 選擇 E 點
            d = d + 2 * x + 3
        else:  # 選擇 SE 點
            d = d + 2 * (x - y) + 5
            y -= 1
        x += 1

# 繪製圓形網格
def grid(width, height, grid_pix):
    for i in range(width):
        for j in range(height):
            ctx.strokeStyle = "lightgrey"
            ctx.strokeRect(i * grid_pix, j * grid_pix, grid_pix, grid_pix)

# 畫網格
grid(20, 20, gs)

# 畫填滿的點陣圓形
draw_circle_filled(10, 10, 6, "blue")
