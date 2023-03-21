import Axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
export const getAll = async (req, res) => {
    try {
        const { data: users } = await Axios.get(
            "http://localhost:3000/users"
        );
        if (users.length === 0) {
            res.send({
                messenger: "khong co thang nao",
            });
        }
        return res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ messenger: err });
    }
};

export const getDetail = async (req, res) => {
    try {
      const { data: users } = await Axios.get(`${process.env.API_URI}/${req.params.id}`);
      if (!users) {
        res.send({
          messenger: "Không tìm thấy thang nao",
        });
      }
      return res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ messenger: err }); 
    }
  };
  
export const create = async (req, res) => {
    try {
        const { data: users } = await Axios.post(`${process.env.API_URI}`, req.body);
        if (!users) {
            res.send({
                messenger: "khong co thang nao duoc them ca",
            });
        }
        return res.json(users )
    } catch (error) {
        res.status(500).json({ messenger: error });
    }
};

export const update = async (req, res) => {
    try {
        const { data: users } = await Axios.put(`${process.env.API_URI}/${req.params.id}`, req.body);
        if (!users) {
            res.send({
                messenger: "them khong thanh cong",
            });
        }
        return res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ messenger: error });
    }
}

export const remove = async (req, res) => {
    try {
        await Axios.delete(`${process.env.API_URI}/${req.params.id}`);
        return res.status(200).json({
          message: "Sản phẩm đã được xóa thành công",
        });
      } catch (error) {
        return res.status(500).json({
          message: error,
        });
      }
    };