import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  FileText,
  User,
  Calendar,
  Tags,
  Pencil,
  Trash2,
} from 'lucide-react';
import type { FileData } from '../../types/FileData';
import { getFiles, updateFile } from '../../api/service';

const TableHeaderCell = styled.th`
  text-align: left;
  padding: 12px 16px;
  font-weight: 600;
  font-size: 14px;
  color: #374151;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const TableTitle = styled.div`
   text-align: left;
   padding-bottom: 10px;
  font-weight: 800;
  font-size: 22px;
  color: #16a34a;
`;

const TableContainer = styled.div`
  margin: 24px;
  border-radius: 8px;
  overflow-x: auto;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 1200px;
`;

const TableHead = styled.thead`
  background-color: #f3f4f6;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #e5e7eb;

  &:hover {
    background-color: #f9fafb;
  }
`;

const TableCell = styled.td`
  padding: 12px 16px;
  font-size: 14px;
  color: #374151;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: #4b5563;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;

  &:hover {
    color: #111827;
  }
`;

interface DataTableProps {
  activeTab: number;
}

export const DataTable = ({ activeTab }: DataTableProps) => {
  const [files, setFiles] = useState<FileData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [editingRowId, setEditingRowId] = useState<number | null>(null);
  const [editValues, setEditValues] = useState<Partial<FileData>>({});
  const [editingCell, setEditingCell] = useState<{ id: number; field: keyof FileData } | null>(null);
  const [editValue, setEditValue] = useState<string | number>('');



  const fetchData = async () => {
    setLoading(true);
    const res = await getFiles();
    setFiles(res);
    setLoading(false);
  };

  const handleSaveEdit = async () => {
  if (!editingCell) return;

  const updatedField = { [editingCell.field]: editValue };
  await updateFile(editingCell.id, updatedField);

  await fetchData();
  setEditingCell(null);
  setEditValue('');
};


  useEffect(() => {
    fetchData();
  }, []);


  return (
    <TableContainer>
      <StyledTable>
        <TableHead>
          <tr>
            <TableHeaderCell>
              <HeaderContent><FileText size={16} /> Unidade</HeaderContent>
            </TableHeaderCell>
            <TableHeaderCell>
              <HeaderContent><User size={16} /> Data registro</HeaderContent>
            </TableHeaderCell>
            <TableHeaderCell>
              <HeaderContent><Calendar size={16} /> Pessoa registro</HeaderContent>
            </TableHeaderCell>
            <TableHeaderCell>
              <HeaderContent><Tags size={16} /> Tipo de arquivo</HeaderContent>
            </TableHeaderCell>
            <TableHeaderCell>
              <HeaderContent><Pencil size={16} /> Título</HeaderContent>
            </TableHeaderCell>
            <TableHeaderCell>
              <HeaderContent><Trash2 size={16} /> Nome Paciente</HeaderContent>
            </TableHeaderCell>
          </tr>
        </TableHead>
        <tbody>
          {files.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.ID}</TableCell>
              <TableCell>
                {new Date(item.DATE_IN).toLocaleDateString('pt-BR')}
              </TableCell>
              <TableCell>{item.FILE_NAME}</TableCell>
              <TableCell
                onClick={() => {
                  setEditingCell({ id: item.ID, field: 'FILE_TYPE' });
                  setEditValue(item.FILE_TYPE);
                }}
                style={{ cursor: 'pointer' }}
              >
                {editingCell?.id === item.ID && editingCell.field === 'FILE_TYPE' ? (
                  <input
                    type="number"
                    value={editValue}
                    autoFocus
                    onChange={(e) => setEditValue(Number(e.target.value))}
                    onBlur={handleSaveEdit}
                    onKeyDown={(e) => e.key === 'Enter' && handleSaveEdit()}
                  />
                ) : (
                  item.FILE_TYPE
                )}
              </TableCell>
              <TableCell
                onClick={() => {
                  setEditingCell({ id: item.ID, field: 'FILE_NAME_V2' });
                  setEditValue(item.FILE_NAME_V2);
                }}
                style={{ cursor: 'pointer' }}
              >
                {editingCell?.id === item.ID && editingCell.field === 'FILE_NAME_V2' ? (
                  <input
                    type="text"
                    value={editValue}
                    autoFocus
                    onChange={(e) => setEditValue(e.target.value)}
                    onBlur={handleSaveEdit}
                    onKeyDown={(e) => e.key === 'Enter' && handleSaveEdit()}
                  />
                ) : (
                  <ActionButton onClick={() => { }}>
                    <Pencil size={16} style={{ paddingRight: '10px' }} />
                    {item.FILE_NAME_V2}
                  </ActionButton>
                )}
              </TableCell>
              <TableCell
                onClick={() => {
                  setEditingCell({ id: item.ID, field: 'FILE_PATH' });
                  setEditValue(item.FILE_PATH);
                }}
                style={{ cursor: 'pointer' }}
              >
                {editingCell?.id === item.ID && editingCell.field === 'FILE_PATH' ? (
                  <input
                    type="text"
                    value={editValue}
                    autoFocus
                    onChange={(e) => setEditValue(e.target.value)}
                    onBlur={handleSaveEdit}
                    onKeyDown={(e) => e.key === 'Enter' && handleSaveEdit()}
                  />
                ) : (
                  <ActionButton onClick={() => { }}>
                    <Trash2 size={16} style={{ paddingRight: '10px' }} />
                    {item.FILE_PATH}
                  </ActionButton>
                )}
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};
